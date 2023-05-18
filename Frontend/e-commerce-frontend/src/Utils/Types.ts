export type FetchResponseGET<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param, token?: string, isFormData?: boolean) => any;
};

export type FetchResponsePOST<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param) => any;
};

export type WelcomePageConfigType = {
    title: string;
    description: string;
    buttonText: string;
};

export type NavBarConfigType = {
    path: string;
    name: string;
};

export type AuthResponseType = {
    username: string;
    token: string;
    expiration: string;
    status?: number;
};

export type CredentialsType = {
    username: string;
    password: string;
};
export type ProductType = {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    categoryId: number;
};
export type CategoryType = {
    id: number;
    categoryName: string;
    description: string;
    imageUrl: string;
};