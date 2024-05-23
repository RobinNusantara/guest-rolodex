import { UnitDto } from "../Unit/UnitDto";

export class PropertyDto {
    id: number;

    name: number;

    units: Array<UnitDto>;

    createdAt: Date;

    updatedAt: Date;
}
