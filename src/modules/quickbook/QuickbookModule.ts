import { Module } from "@nestjs/common";
import { QuickbookController } from "./controllers/QuickbookController";
import { QuickbookService } from "./services/QuicbookService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuickbookModel } from "src/models/Quickbook/QuicbookModel";

@Module({
    imports: [TypeOrmModule.forFeature([QuickbookModel])],
    controllers: [QuickbookController],
    providers: [QuickbookService],
})
export class QuickbookModule {}
