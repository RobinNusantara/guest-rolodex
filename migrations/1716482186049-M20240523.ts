/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class M202405231716482186049 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "bookings",
            new TableForeignKey({
                columnNames: ["guest_id"],
                referencedTableName: "guests",
                referencedColumnNames: ["id"],
            }),
        );

        await queryRunner.createForeignKey(
            "bookings",
            new TableForeignKey({
                columnNames: ["property_id"],
                referencedTableName: "properties",
                referencedColumnNames: ["id"],
            }),
        );

        await queryRunner.createForeignKey(
            "booking_to_units",
            new TableForeignKey({
                columnNames: ["booking_id"],
                referencedTableName: "bookings",
                referencedColumnNames: ["id"],
            }),
        );

        await queryRunner.createForeignKey(
            "booking_to_units",
            new TableForeignKey({
                columnNames: ["unit_id"],
                referencedTableName: "units",
                referencedColumnNames: ["id"],
            }),
        );

        await queryRunner.createForeignKey(
            "units",
            new TableForeignKey({
                columnNames: ["property_id"],
                referencedTableName: "properties",
                referencedColumnNames: ["id"],
            }),
        );

        await queryRunner.createForeignKey(
            "payouts",
            new TableForeignKey({
                columnNames: ["booking_id"],
                referencedTableName: "bookings",
                referencedColumnNames: ["id"],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
