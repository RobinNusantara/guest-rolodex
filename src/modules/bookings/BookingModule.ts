import { Module } from "@nestjs/common";
import { BookingController } from "./controllers/BookingController";
import { BookingService } from "./services/BookingService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookingModel } from "src/models/Booking/BookingModel";
import { GuestModel } from "src/models/Guest/GuestModel";
import { BookingToUnitModel } from "src/models/Booking/BookingToUnitModel";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            BookingModel,
            GuestModel,
            BookingToUnitModel,
        ]),
    ],
    controllers: [BookingController],
    providers: [BookingService],
})
export class BookingModule {}
