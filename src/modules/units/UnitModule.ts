import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UnitModel } from "src/models/Unit/UnitModel";
import { UnitService } from "./services/UnitService";
import { UnitRepository } from "./repositories/UnitRepository";

@Module({
    imports: [TypeOrmModule.forFeature([UnitModel])],
    exports: [UnitService],
    providers: [UnitRepository, UnitService],
})
export class UnitModule {}
