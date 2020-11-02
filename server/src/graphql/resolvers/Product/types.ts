export interface IProductCategory {
    id: string;
    slug: string;
}
export interface IProductType {
    id: string;
    slug: string;
}
export interface IProductInput {
    type: IProductType;
    categories: Array<IProductCategory>;
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
    is_featured: boolean;
}
export interface IUpdateProductInput {
    type: IProductType;
    categories: Array<IProductCategory>;
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
    is_featured: boolean;
}

export interface IUpdateProductInputArgs {
    id?: string;
    input: IUpdateProductInput;
}

export interface IProductsArgs {
    type?: string;
    category?: string;
    limit: number;
    offset: number;
    searchText?: string;
}
