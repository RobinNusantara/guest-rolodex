import { GuestDto } from "../Guest/GuestDto";
import { PropertyDto } from "../Property/PropertyDto";

export class InsertBookingDto {
    guest: Pick<GuestDto, "name" | "email" | "phoneNumber">;

    checkIn: Date;

    checkOut: Date;

    value: number;

    property: Pick<PropertyDto, "id">;

    units: Array<number>;
}
