import { Injectable, Logger } from "@nestjs/common";
import { MidtransService } from "./MidtransService";
import { InsertPaymentDto } from "src/dtos/Payment/InsertPaymentDto";
import { BookingRepository } from "src/modules/bookings/repositories/BookingRepository";
import { ConfigService } from "@nestjs/config";
import { BookingStatus } from "src/models/Booking/BookingModel";

@Injectable()
export class MidtransPaymentService extends MidtransService {
    private logger = new Logger(MidtransPaymentService.name);

    constructor(
        private readonly bookingRepository: BookingRepository,
        configService: ConfigService,
    ) {
        super(configService);
    }

    public async createPayment(args: InsertPaymentDto): Promise<any> {
        try {
            const response = await this.post("v1/payment-links", {
                ["transaction_details"]: {
                    ["order_id"]: `BV${Date.now()}`,
                    ["gross_amount"]: args.price,
                    ["payment_link_id"]: args.product.id,
                },
                ["customer_required"]: true,
                ["customer_details"]: {
                    ["first_name"]: args.customer.firstName,
                    ["last_name"]: args.customer.lastName,
                    ["email"]: args.customer.email,
                    ["phone"]: args.customer.phone,
                },
                ["item_details"]: args.items.map((item) => ({
                    ["id"]: item.id,
                    ["name"]: item.name,
                    ["price"]: item.price,
                    ["quantity"]: item.quantity,
                })),
                ["usage_limit"]: 1,
                ["custom_field1"]: args.product.id,
                ["custom_field2"]: args.product.type,
            });

            return response.data;
        } catch (error) {
            this.logger.error(error.response.data);

            return null;
        }
    }

    public async updatePayment(args: object): Promise<any> {
        console.log(args);

        const id = args["custom_field1"];
        const type = args["custom_field2"];
        const status = args["transaction_status"];

        if (type === "Booking") {
            if (status === "settlement") {
                await this.bookingRepository.updateStatus(
                    id,
                    BookingStatus.Confirmed,
                );
            }
        }
    }
}
