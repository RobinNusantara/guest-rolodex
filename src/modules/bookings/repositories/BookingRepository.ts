import { Injectable } from "@nestjs/common";
import { BookingModel, BookingStatus } from "src/models/Booking/BookingModel";
import { DataSource, Repository, UpdateResult } from "typeorm";

@Injectable()
export class BookingRepository extends Repository<BookingModel> {
    constructor(private dataSource: DataSource) {
        super(BookingModel, dataSource.createEntityManager());
    }

    public async updateStatus(
        id: string,
        status: BookingStatus,
    ): Promise<UpdateResult> {
        return await this.dataSource
            .createQueryBuilder()
            .update(BookingModel)
            .set({ status })
            .where("id = :id", { id })
            .execute();
    }
}
