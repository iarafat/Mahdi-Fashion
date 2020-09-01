export interface IProductInput {
    type_id: string;
    category_id: string;
    name: string;
    description?: string;
    images: [string];
    unit?: number;
    price: number;
    sale_price?: number;
    discount_in_percent?: number;
    product_quantity: number;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
}
export interface IUpdateProductInput {
    type_id?: string;
    category_id?: string;
    name?: string;
    description?: string;
    images?: [string];
    unit?: number;
    price?: number;
    sale_price?: number;
    discount_in_percent?: number;
    product_quantity?: number;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
}

export interface IUpdateProductInputArgs {
    id?: string;
    input: IUpdateProductInput;
}