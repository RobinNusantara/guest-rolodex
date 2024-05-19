import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { BookingModel } from "../Booking/BookingModel";
import { UnitModel } from "../Unit/UnitModel";

@Entity({ name: "properties" })
export class PropertyModel {
    @PrimaryGeneratedColumn("increment", {
        type: "int",
    })
    id: number;

    @Column({
        type: "varchar",
        nullable: false,
    })
    name: string;

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamp",
    })
    updatedAt: Date;

    @OneToMany(() => BookingModel, (booking) => booking.property)
    bookings: Array<BookingModel>;

    @OneToMany(() => UnitModel, (unit) => unit.property)
    units: Array<UnitModel>;
}
