import { Module } from "@nestjs/common";
import { BookingModule } from "./modules/bookings/BookingModule";
import { DatabaseModule } from "./infrastructures/database/DatabaseModule";
import { ConfigModule } from "@nestjs/config";
import { QuickbookModule } from "./modules/quickbook/QuickbookModule";
import { ScheduleModule } from "@nestjs/schedule";
import { GuestModule } from "./modules/guests/GuestModule";

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        BookingModule,
        GuestModule,
        QuickbookModule,
    ],
})
export class AppModule {}
