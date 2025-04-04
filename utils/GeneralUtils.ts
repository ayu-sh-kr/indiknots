import type {FormError} from "#ui/types";
import type {ResponseHandler} from "@ayu-sh-kr/dota-rest";

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


/**
 * Retrieves the active page information from a list of links based on the current route.
 *
 * This function searches through an array of link objects to find the one that matches
 * the current route path. If a matching link is found, it returns the link object.
 * If no match is found, it returns a default object with empty `label` and `to` properties.
 *
 * @template T - The type of the link objects in the array.
 * @param route - The current route object, which contains the path to be matched.
 * @param links - An array of link objects to search through. Each link object should have a `to` property.
 * @returns T - The link object that matches the current route path, or a default object if no match is found.
 */
const getActivePageInfo = <T extends Nav>(route: any, links: T[]) : T   => {
    return links.find(link => link.to === route.path) || {label: '', to: ''} as T
}


/**
 * Checks if the given string is not blank.
 *
 * This function determines if the input string has a length greater than 1,
 * indicating that it is not blank. It returns `true` if the string is not blank,
 * otherwise it returns `false`.
 *
 * @param value - The string to be checked.
 * @returns boolean - Returns `true` if the input string is not blank, otherwise `false`.
 */
const isNotBlank = (value: string) => {
    return value.length > 1
}


/**
 * Clears the fields of the given address form.
 *
 * This function resets all the properties of the provided address form object
 * to their default values. It sets the `id`, `name`, `zipcode`, `locality`, `area`,
 * `city`, `state`, `country`, `landmark`, and `referer` properties to empty strings.
 * It also sets the `phone` and `alternatePhone` properties to objects with default
 * values, and the `addressType` property to "Home".
 *
 * @param addressForm - The address form object to be cleared.
 */
const clearAddressForm = (addressForm: Address) => {
    addressForm.id = 0;
    addressForm.name = "";
    addressForm.phone = {
        code: "+91",
        number: ""
    }
    addressForm.zipcode = "";
    addressForm.locality = "";
    addressForm.area = "";
    addressForm.city = "";
    addressForm.state = "";
    addressForm.country = "";
    addressForm.landmark = "";
    addressForm.alternatePhone = {
        code: "+91",
        number: ""
    }
    addressForm.addressType = "Home";
    addressForm.referer = "";
}


/**
 * Checks if a specific error path exists in the list of form errors.
 *
 * This function iterates through the provided array of form errors and checks
 * if any error object has a `path` property that matches the specified path.
 * If a matching error is found, the function returns `true`, indicating that
 * the specified path has an associated error. Otherwise, it returns `false`.
 *
 * @param path - The path to check for errors.
 * @param errors - An array of form error objects to search through.
 * @returns boolean - Returns `true` if an error with the specified path is found, otherwise `false`.
 */
const checkError = (path: string, errors: FormError[]): boolean => {
    return errors.some(error => error.path === path)
}


/**
 * Validates if the given password meets the required criteria.
 *
 * This function checks if the input password is not empty, has a minimum length of 8 characters,
 * and does not contain any malicious characters such as `<`, `>`, `/`, `\`, `;`, or `-`.
 * If the password meets all these criteria, the function returns `true`. Otherwise, it returns `false`.
 *
 * @param password - The password string to be validated.
 * @returns boolean - Returns `true` if the password is valid, otherwise `false`.
 */
const validatePassword = (password: string | undefined): boolean => {
    if (!password || password.trim().length === 0) return false;

    const minLength = 8;
    const maliciousPattern = /[<>\/\\;\-]/;

    return password.length >= minLength && !maliciousPattern.test(password);
};



/**
 * Creates a deep copy of the given object.
 *
 * This function recursively copies all properties of the input object, ensuring that
 * nested objects and arrays are also deeply copied. It handles primitive types, Date objects,
 * arrays, and plain objects. The resulting copy is a new object that is structurally identical
 * to the input object but does not share any references with it.
 *
 * @template T - The type of the input object.
 * @param obj - The object to be deeply copied.
 * @returns T - A new object that is a deep copy of the input object.
 */
function deepCopy<T>(obj: T): T {
    // Check if the value is a primitive type
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj.getTime()) as any;
    }

    // Handle Array
    if (Array.isArray(obj)) {
        const arrCopy = [] as any[];
        for (const item of obj) {
            arrCopy.push(deepCopy(item));
        }
        return arrCopy as any;
    }

    // Handle Object
    const objCopy = {} as { [key: string]: any };
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepCopy(obj[key]);
        }
    }

    return objCopy as T;
}

/**
 * This function is bare minimum implementation of `ResponseHandler` which checks for status of
 * response whether it is `ok` i.e in the range of 200-209 else throw an error with the customized
 * message.
 *
 * @param response - Response object returned by the `fetch` call
 */
const defaultResponseHandler: ResponseHandler = (response: Response) => {
    const toast = useToastService();
    if (!response.ok) {
        if (response.headers.get('Content-Type') === 'application/json')
            response.clone().json()
                .then(value => {
                        console.log(value);
                        toast.failure(value.message)
                    }
                );
        throw new Error(`Server respond with status code ${response.status}`);
    }
}

/**
 * Capitalizes the first letter of the given string and converts the rest to lowercase.
 *
 * This function takes a string input and returns a new string with the first character
 * converted to uppercase and the remaining characters converted to lowercase. If the input
 * string is empty or undefined, it returns the original string.
 *
 * @param str - The input string to be capitalized.
 * @returns string - The capitalized string.
 */
const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export {
    roundedTo2, isEmail, isValidGender, isValidAddressType, isValidAccountType,
    getActivePageInfo, isNotBlank, clearAddressForm, checkError, validatePassword, deepCopy,
    defaultResponseHandler, capitalize
}