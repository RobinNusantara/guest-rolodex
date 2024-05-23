import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookingModel } from "src/models/Booking/BookingModel";
import { BookingToUnitModel } from "src/models/Booking/BookingToUnitModel";
import { GuestModel } from "src/models/Guest/GuestModel";
import { PayoutModel } from "src/models/Payout/PayoutModel";
import { PropertyModel } from "src/models/Property/PropertyModel";
import { UnitModel } from "src/models/Unit/UnitModel";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: "mysql",
                host: configService.getOrThrow("MYSQL_HOST"),
                port: configService.getOrThrow("MYSQL_PORT"),
                database: configService.getOrThrow("MYSQL_DATABASE"),
                username: configService.getOrThrow("MYSQL_USERNAME"),
                password: configService.getOrThrow("MYSQL_PASSWORD"),
                synchronize: false,
                entities: [
                    BookingModel,
                    BookingToUnitModel,
                    GuestModel,
                    PayoutModel,
                    PropertyModel,
                    UnitModel,
                ],
            }),
        }),
    ],
})
export class DatabaseModule {}
