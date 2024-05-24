import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
/** Models */
import { BookingModel } from "src/models/Booking/BookingModel";
import { BookingToUnitModel } from "src/models/Booking/BookingToUnitModel";
/** Repositories */
import { BookingRepository } from "./repositories/BookingRepository";
import { GuestRepository } from "../guests/repositories/GuestRepository";
import { BookingToUnitRepository } from "./repositories/BookingToUnitRepository";
/** Services */
import { BookingService } from "./services/BookingService";
import { GuestService } from "../guests/services/GuestService";
import { MidtransPaymentService } from "../midtrans/services/MidtransPaymentService";
/** Controllers */
import { BookingController } from "./controllers/BookingController";
import { UnitService } from "../units/services/UnitService";
import { UnitRepository } from "../units/repositories/UnitRepository";

@Module({
    imports: [TypeOrmModule.forFeature([BookingModel, BookingToUnitModel])],
    exports: [BookingService],
    providers: [
        /** Services */
        BookingService,
        GuestService,
        UnitService,
        MidtransPaymentService,
        /** Repositories */
        BookingRepository,
        BookingToUnitRepository,
        UnitRepository,
        GuestRepository,
    ],
    controllers: [BookingController],
})
export class BookingModule {}
