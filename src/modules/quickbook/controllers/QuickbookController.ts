import { Controller, Get, Req, Res } from "@nestjs/common";
import { QuickbookService } from "../services/QuicbookService";
import { Response } from "express";

@Controller("quickbooks")
export class QuickbookController {
    constructor(private readonly quickbookService: QuickbookService) {}

    @Get("/authentication")
    public async authentication(@Res() res: Response): Promise<any> {
        const uri = await this.quickbookService.authentication();

        res.redirect(uri);
    }

    @Get("/callback")
    public async callback(@Req() req: Request): Promise<any> {
        return await this.quickbookService.callback(req.url);
    }
}
