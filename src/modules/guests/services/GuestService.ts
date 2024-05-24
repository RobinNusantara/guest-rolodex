import { Injectable } from "@nestjs/common";
/** Models */
import { GuestModel } from "src/models/Guest/GuestModel";
/** Dtos */
import { GuestDto } from "src/dtos/Guest/GuestDto";
/** Repositories */
import { GuestRepository } from "../repositories/GuestRepository";

@Injectable()
export class GuestService {
    constructor(private readonly guestRepository: GuestRepository) {}

    public async findOrCreateGuest(
        args: Omit<GuestDto, "id" | "createdAt" | "updatedAt">,
    ): Promise<GuestModel> {
        let guest: GuestModel;

        guest = await this.guestRepository.findOne({
            where: {
                name: args.name,
                email: args.email,
            },
        });

        if (!guest) {
            guest = this.guestRepository.create({
                name: args.name,
                email: args.email,
                phoneNumber: args.phoneNumber,
            });

            return await this.guestRepository.save(guest);
        }

        return guest;
    }
}
