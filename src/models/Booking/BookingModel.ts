import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { PropertyModel } from "../Property/PropertyModel";
import { GuestModel } from "../Guest/GuestModel";
import { PayoutModel } from "../Payout/PayoutModel";
import { UnitModel } from "../Unit/UnitModel";

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

    @OneToMany(() => PayoutModel, (payout) => payout.booking)
    payouts: Array<PayoutModel>;

    @ManyToOne(() => GuestModel, (guest) => guest.bookings)
    @JoinColumn({
        name: "guest_id",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_guests_guest_id",
    })
    guest: GuestModel;

    @ManyToOne(() => PropertyModel, (property) => property.bookings)
    @JoinColumn({
        name: "property_id",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_bookings_property_id",
    })
    property: PropertyModel;

    @ManyToMany(() => UnitModel)
    @JoinTable({
        name: "booking_to_units",
        joinColumn: {
            name: "booking_id",
            referencedColumnName: "id",
            foreignKeyConstraintName: "fk_booking_to_units_booking_id",
        },
        inverseJoinColumn: {
            name: "unit_id",
            referencedColumnName: "id",
            foreignKeyConstraintName: "fk_booking_to_units_unit_id",
        },
        synchronize: false,
    })
    units: Array<UnitModel>;
}
