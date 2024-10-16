/**
 * `Function` to round off a decimal number to 2 digit.
 * @param value - `number` to round off to 2-digit decimal value.
 * @returns number - value rounded off to 2 decimal.
 */
const roundedTo2 = (value: number) => {
    return Math.round(value * 100) / 100;
}


/**
 * Validates if the given string is a valid email address.
 *
 * This function uses a regular expression to check if the input string
 * conforms to the standard email format. The email format is defined as
 * one or more characters before the "@" symbol, followed by one or more
 * characters, a dot, and one or more characters after the dot.
 *
 * @param value - The string to be validated as an email address.
 * @returns boolean - Returns `true` if the input string is a valid email address, otherwise `false`.
 */
const isEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
}


/**
 * Validates if the given string is a valid gender.
 *
 * This function checks if the input string matches one of the predefined
 * gender values: "Male", "Female", or "Other". If the input string matches
 * any of these values, the function returns `true`. Otherwise, it returns `false`.
 *
 * @param value - The string to be validated as a gender.
 * @returns boolean - Returns `true` if the input string is a valid gender, otherwise `false`.
 */
const isValidGender = (value: string) => {
    switch (value as Gender) {
        case "Male": return true;
        case "Female": return true;
        case "Other": return true;
        default: return false;
    }
}


/**
 * Validates if the given string is a valid address type.
 *
 * This function checks if the input string matches one of the predefined
 * address type values: "Home" or "Work". If the input string matches
 * any of these values, the function returns `true`. Otherwise, it returns `false`.
 *
 * @param value - The string to be validated as an address type.
 * @returns boolean - Returns `true` if the input string is a valid address type, otherwise `false`.
 */
const isValidAddressType = (value: string) => {
    switch (value as AddressType) {
        case "Home": return true;
        case "Work": return true;
        default: return false;
    }
}


/**
 * Validates if the given string is a valid account type.
 *
 * This function checks if the input string matches one of the predefined
 * account type values: "MERCHANT" or "USER". If the input string matches
 * any of these values, the function returns `true`. Otherwise, it returns `false`.
 *
 * @param value - The string to be validated as an account type.
 * @returns boolean - Returns `true` if the input string is a valid account type, otherwise `false`.
 */
const isValidAccountType = (value: string) => {
    switch (value as AccountType) {
        case "MERCHANT": return true;
        case "USER": return  true;
        default: return false;
    }
}

const getActivePageInfo = <T>(route: any, links: T[]) : T => {
    return links.find(link => link.to === route.path) || {label: '', to: ''}
}

export {roundedTo2, isEmail, isValidGender, isValidAddressType, isValidAccountType, getActivePageInfo}