import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
/** Dtos */
import { InsertBookingDto } from "src/dtos/Booking/InsertBookingDto";
/** Services */
import { GuestService } from "src/modules/guests/services/GuestService";
import { MidtransPaymentService } from "src/modules/midtrans/services/MidtransPaymentService";
/** Repositories */
import { BookingToUnitRepository } from "../repositories/BookingToUnitRepository";
import { BookingRepository } from "../repositories/BookingRepository";
import { UnitService } from "src/modules/units/services/UnitService";

@Injectable()
export class BookingService {
    constructor(
        private readonly entityManager: EntityManager,
        /** Repositories */
        private readonly bookingRepository: BookingRepository,
        private readonly bookingToUnitRepository: BookingToUnitRepository,
        /** Services */
        private readonly guestService: GuestService,
        private readonly unitService: UnitService,
        private readonly midtransPaymentService: MidtransPaymentService,
    ) {}

    public async insertBooking(body: InsertBookingDto): Promise<any> {
        const results = {};

        await this.entityManager.transaction(async (entityManager) => {
            await entityManager.queryRunner.startTransaction();

            const guest = await this.guestService.findOrCreateGuest({
                name: body.guest.name,
                email: body.guest.email,
                phoneNumber: body.guest.phoneNumber,
            });

            const fullName = guest.name.split(" ");
            const firstName = fullName[0];
            const lastName = firstName[fullName.length - 1];

            const booking = this.bookingRepository.create({
                checkIn: body.checkIn,
                checkOut: body.checkOut,
                value: body.value,
                guestId: guest.id,
                propertyId: body.property.id,
            });

            await entityManager.save(booking);

            const units = body.units.map((unit) => {
                return this.bookingToUnitRepository.create({
                    bookingId: booking.id,
                    unitId: unit,
                });
            });

            await entityManager.save(units);

            const unitIds = units.map((x) => x.unitId);
            const items = await this.unitService.findUnits(unitIds);

            const response = await this.midtransPaymentService.createPayment({
                product: {
                    id: booking.id,
                    type: "Booking",
                },
                price: body.value,
                customer: {
                    firstName: firstName,
                    lastName: lastName,
                    email: guest.email,
                    phone: guest.phoneNumber,
                },
                items: items.map((item) => ({
                    id: String(item.id),
                    name: item.name,
                    quantity: 1,
                    price: booking.value / items.length,
                })),
            });

            await entityManager.queryRunner.commitTransaction();

            Object.assign(results, {
                id: booking.id,
                guest,
                checkIn: booking.checkIn,
                checkOut: booking.checkOut,
                order: {
                    id: response["order_id"],
                    url: response["payment_url"],
                },
            });
        });

        return results;
    }
}
