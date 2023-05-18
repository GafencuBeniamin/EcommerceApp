const backendEnvironment = 'https://localhost:8080/';
const routeBase = 'api/v1';
const authRouteBase = 'auth';
const id = ':id';

export const requestUrls = {
    categories: `${backendEnvironment}}/categories`,
    products: `${backendEnvironment}/products`,
    product: `${backendEnvironment}/products/${id}`,

    authRegister: `${backendEnvironment}${routeBase}/${authRouteBase}/register`,
    authLogin: `${backendEnvironment}${routeBase}/${authRouteBase}/login`,
};