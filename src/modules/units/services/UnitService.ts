import { Injectable } from "@nestjs/common";
import { UnitRepository } from "../repositories/UnitRepository";
import { UnitModel } from "src/models/Unit/UnitModel";
import { Equal, In } from "typeorm";

@Injectable()
export class UnitService {
    constructor(private readonly unitRepository: UnitRepository) {}

    public async findUnits(ids: Array<number>): Promise<Array<UnitModel>> {
        return await this.unitRepository.find({
            where: {
                id: In(ids),
            },
        });
    }

    public async findUnit(id: number): Promise<UnitModel> {
        return await this.unitRepository.findOne({
            where: {
                id: Equal(id),
            },
        });
    }
}
