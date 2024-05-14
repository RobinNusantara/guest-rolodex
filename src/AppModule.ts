import { Module } from '@nestjs/common';
import { BookingModule } from './modules/bookings/BookingModule';

@Module({
  imports: [BookingModule],
})
export class AppModule {}
