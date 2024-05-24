import { Controller, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { MidtransPaymentService } from "../services/MidtransPaymentService";

@Controller("midtrans")
export class MidtransController {
    constructor(
        private readonly midtransPaymentService: MidtransPaymentService,
    ) {}

    @Post("/payment")
    public async payment(
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<any> {
        await this.midtransPaymentService.updatePayment(req.body);

        res.send("");
    }
}
