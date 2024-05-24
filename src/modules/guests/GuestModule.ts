import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
/** Models */
import { GuestModel } from "src/models/Guest/GuestModel";
/** Repositories */
import { GuestRepository } from "./repositories/GuestRepository";
/** Services */
import { GuestService } from "./services/GuestService";

@Module({
    imports: [TypeOrmModule.forFeature([GuestModel])],
    exports: [GuestService],
    providers: [GuestService, GuestRepository],
})
export class GuestModule {}
