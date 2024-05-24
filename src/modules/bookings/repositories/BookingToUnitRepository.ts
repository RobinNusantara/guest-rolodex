import { Injectable } from "@nestjs/common";
import { BookingToUnitModel } from "src/models/Booking/BookingToUnitModel";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class BookingToUnitRepository extends Repository<BookingToUnitModel> {
    constructor(private dataSource: DataSource) {
        super(BookingToUnitModel, dataSource.createEntityManager());
    }
}
