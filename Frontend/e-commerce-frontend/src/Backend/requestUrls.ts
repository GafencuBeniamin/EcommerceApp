
const id = ':id';

export const requestUrls = {
    categories: `http://localhost:8080/categories`,
    category: `http://localhost:8080/categories/${id}`,
    products: `http://localhost:8080/products`,
    product: `http://localhost:8080/products/${id}`,

    authRegister: `http://localhost:8080/api/v1/auth/register`,
    authLogin: `http://localhost:8080/api/v1/auth/authenticate`,
};