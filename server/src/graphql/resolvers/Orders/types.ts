interface IOrderInput {
    customer_id: string;
    contact_number: string;
    payment_option_id: string;
    delivery_address: string;
    amount: number;
    product_ids: [string];
    payment_id:  string;
}

export interface IOrderInputArgs {
    id?: string;
    input: IOrderInput;
}