import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
/** Models */
import { QuickbookModel } from "src/models/Quickbook/QuicbookModel";
/** Repositories */
import { QuicbookRepository } from "./repositories/QuickbookRepository";
/** Services */
import { QuickbookService } from "./services/QuicbookService";
/** Controllers */
import { QuickbookController } from "./controllers/QuickbookController";

@Module({
    imports: [TypeOrmModule.forFeature([QuickbookModel])],
    exports: [QuickbookService],
    providers: [QuickbookService, QuicbookRepository],
    controllers: [QuickbookController],
})
export class QuickbookModule {}
