import { Injectable } from "@nestjs/common";
import { UnitModel } from "src/models/Unit/UnitModel";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UnitRepository extends Repository<UnitModel> {
    constructor(dataSource: DataSource) {
        super(UnitModel, dataSource.createEntityManager());
    }
}
