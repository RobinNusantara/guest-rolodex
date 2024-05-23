import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "quickbooks" })
export class QuickbookModel {
    @PrimaryGeneratedColumn("increment", {
        type: "int",
    })
    id: number;

    @Column({
        name: "access_token",
        type: "text",
        nullable: true,
    })
    accessToken?: string;

    @Column({
        name: "refresh_token",
        type: "text",
        nullable: true,
    })
    refreshToken?: string;

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
