export interface ICategoryInput {
    parent_id?: string;
    name: string;
    banner: string;
    icon: string;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
}

export interface ICategoryInputArgs {
    id?: string;
    input: ICategoryInput;
}