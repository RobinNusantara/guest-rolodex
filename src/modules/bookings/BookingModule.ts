import { Module } from "@nestjs/common";
import { BookingController } from "./controllers/BookingController";
import { BookingService } from "./services/BookingService";

@Module({
    controllers: [BookingController],
    providers: [BookingService],
})
export class BookingModule {}
