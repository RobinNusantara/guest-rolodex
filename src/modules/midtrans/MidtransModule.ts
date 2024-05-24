import { Module } from "@nestjs/common";
import { MidtransService } from "./services/MidtransService";
import { MidtransController } from "./controllers/MidtransController";
import { MidtransPaymentService } from "./services/MidtransPaymentService";
import { BookingRepository } from "../bookings/repositories/BookingRepository";

@Module({
    controllers: [MidtransController],
    providers: [MidtransService, MidtransPaymentService, BookingRepository],
})
export class MidtransModule {}
