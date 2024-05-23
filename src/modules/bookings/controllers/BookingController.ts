import { Body, Controller, Get, Post } from "@nestjs/common";
import { InsertBookingDto } from "src/dtos/Booking/InsertBookingDto";
import { BookingService } from "src/modules/bookings/services/BookingService";

@Controller("bookings")
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}

    @Post()
    public async insertBooking(@Body() body: InsertBookingDto): Promise<any> {
        return await this.bookingService.insertBooking(body);
    }

    @Get()
    public async getBookings(): Promise<any> {
        return await this.bookingService.getBookings();
    }
}
