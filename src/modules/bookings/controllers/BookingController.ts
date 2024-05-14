import { Controller, Get } from '@nestjs/common';
import { BookingService } from 'src/modules/bookings/services/BookingService';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  getBookings(): string {
    return this.bookingService.getBookings();
  }
}
