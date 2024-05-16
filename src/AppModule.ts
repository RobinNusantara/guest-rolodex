import { Module } from "@nestjs/common";
import { BookingModule } from "./modules/bookings/BookingModule";
import { DatabaseModule } from "./modules/database/DatabaseModule";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        BookingModule,
    ],
})
export class AppModule {}
