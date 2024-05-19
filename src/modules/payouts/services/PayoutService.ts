import { Injectable } from "@nestjs/common";

@Injectable()
export class PayoutService {
    getPayouts(): string {
        return "Payouts";
    }
}
