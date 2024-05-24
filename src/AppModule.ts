import { Module } from "@nestjs/common";
import { BookingModule } from "./modules/bookings/BookingModule";
import { DatabaseModule } from "./infrastructures/database/DatabaseModule";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { GuestModule } from "./modules/guests/GuestModule";
import { MidtransModule } from "./modules/midtrans/MidtransModule";

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        BookingModule,
        GuestModule,
        MidtransModule,
    ],
})
export class AppModule {}
