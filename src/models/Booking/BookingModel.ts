import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

export enum BookingStatus {
    Confirmed = "Confirmed",
    Cancelled = "Cancelled",
}

@Entity({ name: "bookings" })
export class BookingModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        name: "guest_id",
        type: "uuid",
        nullable: false,
    })
    guestId: string;

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

    @Column({
        type: "enum",
        enum: BookingStatus,
        default: BookingStatus.Confirmed,
        nullable: false,
    })
    status: BookingStatus;

    @Column({
        type: "decimal",
        precision: 11,
        scale: 2,
        nullable: false,
    })
    value: number;

    @Column({
        name: "property_id",
        type: "int",
        nullable: false,
    })
    propertyId: number;

    @Column({
        name: "qbo_invoice_id",
        type: "varchar",
        length: 255,
        nullable: true,
    })
    qboInvoiceId?: string;

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
}
