import {ProductModal} from "~/domains/product/product.modal";
import {ProductUtils} from "~/domains/product/product.utils";

/**
 * Sorts an array of ProductModal instances alphabetically by their name.
 *
 * @param products - The array of ProductModal instances to be sorted.
 * @returns The sorted array of ProductModal instances.
 */
const sortAlphabetical = (products: ProductModal[]): ProductModal[] => {
    return products.sort((a, b) => a.name.localeCompare(b.name));
}
/**
 * Sorts an array of ProductModal instances in reverse alphabetical order by their name.
 *
 * @param products - The array of ProductModal instances to be sorted.
 * @returns The sorted array of ProductModal instances.
 */
const sortAlphabeticalReverse = (products: ProductModal[]): ProductModal[] => {
    return products.sort((a, b) => b.name.localeCompare(a.name));
}


/**
 * Sorts an array of ProductModal instances by their price in descending order.
 *
 * @param products - The array of ProductModal instances to be sorted.
 * @returns The sorted array of ProductModal instances.
 */
const sortPriceHighToLow = (products: ProductModal[]): ProductModal[] => {
    return products.sort((a, b) => b.variants[0].price.value - a.variants[0].price.value);
}


/**
 * Sorts an array of ProductModal instances by their price in ascending order.
 *
 * @param products - The array of ProductModal instances to be sorted.
 * @returns The sorted array of ProductModal instances.
 */
const sortPriceLowToHigh = (products: ProductModal[]): ProductModal[] => {
    return products.sort((a, b) => a.variants[0].price.value - b.variants[0].price.value);
}


/**
 * Sorts an array of ProductModal instances by their stock status.
 * Products with "AVAILABLE" status will come before those with "SOLD_OUT" status.
 *
 * @param products - The array of ProductModal instances to be sorted.
 * @returns The sorted array of ProductModal instances.
 */
const sortByStock = (products: ProductModal[]) => {
    return products.sort((a, b) => {
        const aStock = ProductUtils.isAnyAvailable(a.variants);
        const bStock = ProductUtils.isAnyAvailable(b.variants);

        if (aStock && !bStock) {
            return -1; // a comes first
        } else if (!aStock && bStock) {
            return 1; // b comes first
        } else {
            return 0; // no change in order
        }
    })
}
/**
 * Sorts an array of ProductModal instances based on the specified sorting criteria.
 *
 * @param products - The array of ProductModal instances to be sorted.
 * @param sort - The sorting criteria to be applied. It can be one of the following:
 *   - "Alphabetical": Sorts products alphabetically by their name.
 *   - "Alphabetical-Reverse": Sorts products in reverse alphabetical order by their name.
 *   - "Price - High to Low": Sorts products by their price in descending order.
 *   - "Price - Low to High": Sorts products by their price in ascending order.
 *   - "Stock": Sorts products by their stock status, with "AVAILABLE" products coming before "SOLD_OUT" products.
 *   - "None": Returns the products array without any sorting.
 * @returns The sorted array of ProductModal instances based on the specified sorting criteria.
 */
const handleProductSorting = (products: ProductModal[], sort: ProductSort) => {
    switch (sort) {
        case "Alphabetical": {
            return sortAlphabetical(products)
        }

        case "Alphabetical-Reverse": {
            return sortAlphabeticalReverse(products)
        }

        case "Price - High to Low": {
            return sortPriceHighToLow(products)
        }

        case "Price - Low to High": {
            return sortPriceLowToHigh(products)
        }

        case "Stock": {
            return sortByStock(products)
        }

        case "None": {
            return products;
        }
    }
}
export {handleProductSorting};