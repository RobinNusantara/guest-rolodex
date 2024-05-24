import { PaymentCustomerDto } from "./PaymentCustomerDto";
import { PaymentItemDto } from "./PaymentItemDto";
import { PaymentProductDto } from "./PaymentProductDto";

export class InsertPaymentDto {
    product: PaymentProductDto;

    price: number;

    items: Array<PaymentItemDto>;

    customer: PaymentCustomerDto;
}
