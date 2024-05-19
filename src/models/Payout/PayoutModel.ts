import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "payouts" })
export class PayoutModel {
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
        type: "decimal",
        precision: 11,
        scale: 2,
    })
    value: number;

    @Column({
        name: "qbo_expense_id",
        type: "varchar",
        length: 255,
        nullable: true,
    })
    qboExpenseId: string;

    @DeleteDateColumn({
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
