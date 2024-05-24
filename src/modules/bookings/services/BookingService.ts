import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";
/** Dtos */
import { InsertBookingDto } from "src/dtos/Booking/InsertBookingDto";
/** Services */
import { GuestService } from "src/modules/guests/services/GuestService";
import { QuickbookService } from "src/modules/quickbook/services/QuicbookService";
/** Repositories */
import { BookingToUnitRepository } from "../repositories/BookingToUnitRepository";
import { BookingRepository } from "../repositories/BookingRepository";

@Injectable()
export class BookingService {
    constructor(
        private readonly entityManager: EntityManager,
        /** Repositories */
        private readonly bookingRepository: BookingRepository,
        private readonly bookingToUnitRepository: BookingToUnitRepository,
        /** Services */
        private readonly guestService: GuestService,
        private readonly quickbookService: QuickbookService,
    ) {}

    public async insertBooking(body: InsertBookingDto): Promise<any> {
        const guest = await this.guestService.findOrCreateGuest({
            name: body.guest.name,
            email: body.guest.email,
            phoneNumber: body.guest.phoneNumber,
        });

        return body;
    }

    public async getBookings(): Promise<any> {
        return "Bookings";
    }
}
