import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "bookings" })
export class BookingModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "check_in",
        type: "date",
        nullable: false,
    })
    checkIn: Date;

    @Column({
        name: "check_out",
        type: "date",
        nullable: false,
    })
    checkOut: Date;
}
