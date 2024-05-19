import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "guests" })
export class GuestModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: false,
    })
    name: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: false,
    })
    email: string;

    @Column({
        name: "phone_number",
        type: "varchar",
        length: 255,
        nullable: false,
    })
    phoneNumber: string;

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
