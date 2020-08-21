export interface ITypeInput {
    name: string;
    image: string;
    icon: string;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
}

export interface ITypeInputArgs {
    input: ITypeInput;
}