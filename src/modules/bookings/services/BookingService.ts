import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertBookingDto } from "src/dtos/Booking/InsertBookingDto";
import { BookingModel } from "src/models/Booking/BookingModel";
import { BookingToUnitModel } from "src/models/Booking/BookingToUnitModel";
import { GuestModel } from "src/models/Guest/GuestModel";
import { QuickbookService } from "src/modules/quickbook/services/QuicbookService";
import { EntityManager, Repository } from "typeorm";

@Injectable()
export class BookingService {
    constructor(
        private readonly entityManager: EntityManager,
        @InjectRepository(BookingModel)
        private readonly bookingRepository: Repository<BookingModel>,
        @InjectRepository(GuestModel)
        private readonly guestRepository: Repository<GuestModel>,
        @InjectRepository(BookingToUnitModel)
        private readonly bookingToUnitRepository: Repository<BookingToUnitModel>,
        private readonly quickbookService: QuickbookService,
    ) {}

    public async insertBooking(body: InsertBookingDto): Promise<any> {
        return body;
    }

    public async getBookings(): Promise<any> {
        return "Bookings";
    }
}
