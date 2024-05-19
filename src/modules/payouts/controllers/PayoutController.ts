import { Controller, Get } from "@nestjs/common";
import { PayoutService } from "../services/PayoutService";

@Controller("payouts")
export class PayoutController {
    constructor(private readonly payoutService: PayoutService) {}

    @Get()
    getPayouts(): string {
        return this.payoutService.getPayouts();
    }
}
