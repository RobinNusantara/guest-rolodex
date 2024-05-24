/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class M202405201716140142250 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "bookings",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "45",
                        isPrimary: true,
                    },
                    {
                        name: "guest_id",
                        type: "varchar",
                        length: "45",
                        isNullable: false,
                    },
                    {
                        name: "check_in",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "check_out",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "status",
                        type: "enum",
                        enumName: "booking_status",
                        enum: ["Pending", "Confirmed", "Cancelled"],
                        default: "'Pending'",
                        isNullable: false,
                    },
                    {
                        name: "value",
                        type: "decimal",
                        precision: 11,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "property_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "qbo_invoice_id",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default:
                            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true,
        );

        await queryRunner.createTable(
            new Table({
                name: "guests",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "45",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "phone_number",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default:
                            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true,
        );

        await queryRunner.createTable(
            new Table({
                name: "booking_to_units",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "unit_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "booking_id",
                        type: "varchar",
                        length: "45",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default:
                            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true,
        );

        await queryRunner.createTable(
            new Table({
                name: "units",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "property_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default:
                            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true,
        );

        await queryRunner.createTable(
            new Table({
                name: "properties",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default:
                            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true,
        );

        await queryRunner.createTable(
            new Table({
                name: "payouts",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "booking_id",
                        type: "varchar",
                        length: "45",
                        isNullable: false,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "value",
                        type: "decimal",
                        precision: 11,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "qbo_expense_id",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default:
                            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
