import { Module } from "@nestjs/common";
import { MidtransService } from "./services/MidtransService";
import { MidtransController } from "./controllers/MidtransController";
import { MidtransPaymentService } from "./services/MidtransPaymentService";

@Module({
    controllers: [MidtransController],
    providers: [MidtransService, MidtransPaymentService],
})
export class MidtransModule {}
