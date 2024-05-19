import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { PropertyModel } from "../Property/PropertyModel";
import { BookingModel } from "../Booking/BookingModel";

@Entity({ name: "units" })
export class UnitModel {
    @PrimaryGeneratedColumn("increment", {
        type: "int",
    })
    id: number;

    @Column({
        type: "varchar",
        nullable: false,
    })
    name: string;

    @Column({
        name: "property_id",
        type: "int",
        nullable: false,
    })
    propertyId: number;

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

    @ManyToOne(() => PropertyModel, (property) => property.units)
    @JoinColumn({
        name: "property_id",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_units_property_id",
    })
    property: PropertyModel;

    @ManyToMany(() => BookingModel)
    // @JoinColumn({ name: "booking_to_units" })
    bookings: Array<BookingModel>;
}
