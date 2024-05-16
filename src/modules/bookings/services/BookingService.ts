import { Injectable } from "@nestjs/common";

@Injectable()
export class BookingService {
    getBookings(): string {
        return "Bookings";
    }
}
