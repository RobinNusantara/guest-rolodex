import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "booking_to_units" })
export class BookingToUnitModel {
    @PrimaryGeneratedColumn("increment", {
        type: "int",
    })
    id: number;

    @Column({
        name: "booking_id",
        type: "uuid",
        nullable: false,
    })
    bookingId: string;

    @Column({
        name: "unit_id",
        type: "int",
        nullable: false,
    })
    unitId: number;

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp",
    })
    createdAt: Date;

    @CreateDateColumn({
        name: "updated_at",
        type: "timestamp",
    })
    updatedAt: Date;
}
