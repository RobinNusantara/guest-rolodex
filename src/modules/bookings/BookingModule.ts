import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
/** Models */
import { BookingModel } from "src/models/Booking/BookingModel";
import { BookingToUnitModel } from "src/models/Booking/BookingToUnitModel";
/** Repositories */
import { BookingRepository } from "./repositories/BookingRepository";
import { GuestRepository } from "../guests/repositories/GuestRepository";
import { BookingToUnitRepository } from "./repositories/BookingToUnitRepository";
import { QuicbookRepository } from "../quickbook/repositories/QuickbookRepository";
/** Services */
import { BookingService } from "./services/BookingService";
import { QuickbookService } from "../quickbook/services/QuicbookService";
import { GuestService } from "../guests/services/GuestService";
/** Controllers */
import { BookingController } from "./controllers/BookingController";

@Module({
    imports: [TypeOrmModule.forFeature([BookingModel, BookingToUnitModel])],
    exports: [BookingService],
    providers: [
        /** Services */
        BookingService,
        GuestService,
        QuickbookService,
        /** Repositories */
        BookingRepository,
        BookingToUnitRepository,
        GuestRepository,
        QuicbookRepository,
    ],
    controllers: [BookingController],
})
export class BookingModule {}
