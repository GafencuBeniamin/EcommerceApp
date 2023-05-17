const backendEnvironment = 'https://localhost:7088/';
const routeBase = 'api';
const authRouteBase = 'auth';
const id = ':id';

export const requestUrls = {

    authRegister: `${backendEnvironment}${routeBase}/${authRouteBase}/register`,
    authLogin: `${backendEnvironment}${routeBase}/${authRouteBase}/login`,
    changePassword: `${backendEnvironment}${routeBase}/${authRouteBase}/change-password`
};