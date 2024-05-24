import { Injectable } from "@nestjs/common";
import { BookingModel } from "src/models/Booking/BookingModel";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class BookingRepository extends Repository<BookingModel> {
    constructor(private dataSource: DataSource) {
        super(BookingModel, dataSource.createEntityManager());
    }
}
