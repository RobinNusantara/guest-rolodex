import { Module } from "@nestjs/common";
import { BookingModule } from "./modules/bookings/BookingModule";
import { DatabaseModule } from "./infrastructures/database/DatabaseModule";
import { ConfigModule } from "@nestjs/config";
import { PayoutModule } from "./modules/payouts/BookingModule";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        BookingModule,
        PayoutModule,
    ],
})
export class AppModule {}
