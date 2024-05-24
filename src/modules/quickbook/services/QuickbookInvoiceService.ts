import { Injectable, Logger } from "@nestjs/common";
import { QuickbookService } from "./QuicbookService";

@Injectable()
export class QuickbookInvoiceService extends QuickbookService {
    private logger = new Logger(QuickbookInvoiceService.name);

    public async createInvoice(): Promise<any> {
        this.logger.log("[Create Invoice]");
    }
}
