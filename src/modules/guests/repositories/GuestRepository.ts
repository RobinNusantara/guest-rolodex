import { Injectable } from "@nestjs/common";
import { GuestModel } from "src/models/Guest/GuestModel";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class GuestRepository extends Repository<GuestModel> {
    constructor(private dataSource: DataSource) {
        super(GuestModel, dataSource.createEntityManager());
    }
}
