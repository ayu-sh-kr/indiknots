
/**
 * `Function` to round off a decimal number to 2 digit.
 * @param value - `number` to round off to 2-digit decimal value.
 * @returns number - value rounded off to 2 decimal.
 */
const roundedTo2 = (value: number) => {
    return Math.round(value * 100) / 100;
}

export {roundedTo2}