const backendEnvironment = 'http://localhost:8080/';
const routeBase = 'api/v1';
const authRouteBase = 'auth';
const id = ':id';

export const requestUrls = {
    categories: `http://localhost:8080/categories`,
    category: `http://localhost:8080/categories/${id}`,
    products: `http://localhost:8080/products`,
    product: `http://localhost:8080/products/${id}`,

    authRegister: `${backendEnvironment}${routeBase}/${authRouteBase}/register`,
    authLogin: `${backendEnvironment}${routeBase}/${authRouteBase}/login`,
};