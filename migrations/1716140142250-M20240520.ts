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
                        isGenerated: true,
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
                        enum: ["Confirmed", "Cancelled"],
                        default: "'Confirmed'",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
