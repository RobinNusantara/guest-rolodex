import { Module } from "@nestjs/common";
import { PayoutController } from "./controllers/PayoutController";
import { PayoutService } from "./services/PayoutService";

@Module({
    controllers: [PayoutController],
    providers: [PayoutService],
})
export class PayoutModule {}
