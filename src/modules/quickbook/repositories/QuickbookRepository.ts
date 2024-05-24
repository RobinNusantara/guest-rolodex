import { Injectable } from "@nestjs/common";
import { QuickbookModel } from "src/models/Quickbook/QuicbookModel";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class QuicbookRepository extends Repository<QuickbookModel> {
    constructor(private dataSource: DataSource) {
        super(QuickbookModel, dataSource.createEntityManager());
    }
}
