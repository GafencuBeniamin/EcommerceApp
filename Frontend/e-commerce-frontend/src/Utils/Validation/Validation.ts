import { commonPasswords } from "./commonPasswords";
import { commonDomains } from "./commonDomains";

export const isNotParamEmpty = (param: string): boolean => {
    return param !== "";
};

export const validateUsername = (username: string): string => {
    const usernameIsNotAlphanumeric = !/^[a-z0-9]+$/i.test(username);

    if (username === "") {
        return "";
    }
    if (usernameIsNotAlphanumeric) {
        return "Username must be alphanumeric.";
    }
    return "";
};

export const validatePassword = (password: string): string => {
    if (password === "") {
        return "";
    }
    if (commonPasswords.includes(password)) {
        return "The password is too common. Please choose a different one.";
    }

    return "";
};
