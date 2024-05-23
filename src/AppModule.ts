import { Module } from "@nestjs/common";
import { BookingModule } from "./modules/bookings/BookingModule";
import { DatabaseModule } from "./infrastructures/database/DatabaseModule";
import { ConfigModule } from "@nestjs/config";
import { PayoutModule } from "./modules/payouts/PayoutModule";
import { QuickbookModule } from "./modules/quickbook/QuickbookModule";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        BookingModule,
        PayoutModule,
        QuickbookModule,
    ],
})
export class AppModule {}
