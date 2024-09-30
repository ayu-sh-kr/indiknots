import type {CartStore} from "~/stores/cart.store";
import {cartAction2Handler, CartModalBuilder} from "~/modals/cart.modal";

/**
 * Represents a product with various attributes and methods to interact with its properties.
 */
class ProductModal implements Product {

    id!: string
    animal_friendly!: boolean;
    category!: ProductCategory;
    color!: string;
    description!: string;
    img!: ProductImage[];
    material!: ProductMaterial;
    name!: string;
    prices!: ProductPrice[];
    sale!: boolean;
    shape!: ProductShape;
    size!: ProductSize[];
    stock!: ProductStock;
    technique!: ProductTechnique;

    constructor() {
    }

    /**
     * Retrieves the price details for a given size.
     * @param size - The size of the product.
     * @returns The price details for the specified size, or `undefined` if not found.
     */
    getPrizeBySize = (size: ProductSize): ProductPrice | undefined => {
        return this.prices.find(price => {
            if (price.size.length === size.length && price.size.width === size.width && price.size.unit === size.unit) {
                return price
            }
        });
    }

    /**
     * Processes and returns the material text.
     * @returns The processed material text.
     */
    getMaterialText = () => {
        return processUnderscoreText(this.material)
    }

    /**
     * Processes and returns the technique text.
     * @returns The processed technique text.
     */
    getTechniqueText = () => {
        return processUnderscoreText(this.technique)
    }

    /**
     * Processes and returns the category text.
     * @returns The processed category text.
     */
    getCategoryText = () => {
        return processUnderscoreText(this.category)
    }

    /**
     * Retrieves the size text for a given size.
     * @param size - The size of the product.
     * @returns The size text.
     */
    getSizeText(size: ProductSize) {
        return `${size.length} x ${size.width} ${size.unit}`
    }


    /**
     * Calculates and returns the discounted price for a given price.
     * @param price - The original price details.
     * @returns The discounted price.
     */
    getDiscountedPrice(price: ProductPrice) {
        const originalPrice = price.price;
        const discount = price.sale_percentage;
        const discountPrice = originalPrice - originalPrice * (discount / 100);
        return Math.round(discountPrice * 100) / 100;
    }


    /**
     * Retrieves the size options available for the product.
     * @returns An array of size options.
     */
    getSizeOptions(): ProductSizeOption[] {
        return this.prices.map(price => {
            return {
                label: this.getSizeText(price.size),
                value: price.size
            } as ProductSizeOption
        })
    }

}

class ProductBuilder {

    private readonly product: ProductModal;

    constructor() {
        this.product = new ProductModal();
    }

    id(id: string): ProductBuilder {
        this.product.id = id;
        return this;
    }

    animalFriendly(animalFriendly: boolean): ProductBuilder {
        this.product.animal_friendly = animalFriendly;
        return this;
    }

    category(category: ProductCategory): ProductBuilder {
        this.product.category = category;
        return this;
    }

    color(color: string): ProductBuilder {
        this.product.color = color;
        return this;
    }

    description(description: string): ProductBuilder {
        this.product.description = description;
        return this;
    }

    img(img: ProductImage[]): ProductBuilder {
        this.product.img = img;
        return this;
    }

    material(material: ProductMaterial): ProductBuilder {
        this.product.material = material;
        return this;
    }

    name(name: string): ProductBuilder {
        this.product.name = name;
        return this;
    }

    price(price: ProductPrice[]): ProductBuilder {
        this.product.prices = price;
        return this;
    }

    sale(sale: boolean): ProductBuilder {
        this.product.sale = sale;
        return this;
    }

    shape(shape: ProductShape): ProductBuilder {
        this.product.shape = shape;
        return this;
    }

    size(size: ProductSize[]): ProductBuilder {
        this.product.size = size;
        return this;
    }

    stock(stock: ProductStock): ProductBuilder {
        this.product.stock = stock;
        return this;
    }

    technique(technique: ProductTechnique): ProductBuilder {
        this.product.technique = technique;
        return this;
    }

    fromProduct(product: Product): ProductBuilder {
        this.id(product.id)
            .animalFriendly(product.animal_friendly)
            .category(product.category)
            .color(product.color)
            .description(product.description)
            .img(product.img)
            .material(product.material)
            .name(product.name)
            .price(product.prices)
            .sale(product.sale)
            .shape(product.shape)
            .size(product.size)
            .stock(product.stock)
            .technique(product.technique)
        return this;
    }

    build(): ProductModal {
        return this.product;
    }
}

/**
 * Retrieves the price text for a given product and size.
 *
 * This function uses the `getPrizeBySize` method of the `ProductModal` class
 * to find the price details for the specified size. If the price is found,
 * it returns a formatted string with the price in USD. If the price is not found,
 * it returns a 'Price not found' message.
 *
 * @param product - The `ProductModal` instance representing the product.
 * @param size - The `ProductSize` instance representing the size of the product.
 * @returns A string representing the price text in USD or a 'Price not found' message.
 */
const getPrizeText = (product: ProductModal, size: ProductSize) => {
    const price = product.getPrizeBySize(size);
    return price ? `USD. ${price.price}` : 'Price not found';
}


/**
 * Processes a given text by replacing all underscores with spaces.
 *
 * This function takes a string input, splits it by underscores, and then joins the resulting array
 * with spaces to form a new string. It is useful for converting text with underscores into a more
 * readable format.
 *
 * @param text - The input string containing underscores.
 * @returns A new string with all underscores replaced by spaces.
 */
const processUnderscoreText = (text: string) => {
    return text.split("_").join(" ")
}


/**
 * Handles the action of adding a product to the cart.
 *
 * This function creates a new `CartModal` instance using the `CartModalBuilder` class,
 * populates it with the provided product details, and then calls the `cartAction2Handler`
 * function to process the cart action.
 *
 * @param product - The `ProductModal` instance representing the product to be added to the cart.
 * @param cartStore - The `CartStore` instance representing the cart store where the product will be added.
 * @returns The result of the `cartAction2Handler` function, which processes the cart action.
 */
const cartActionHandler = (product: ProductModal, cartStore: CartStore) => {

    const builder = new CartModalBuilder()
    const cartModal = builder.product(product)
        .productId(product.id)
        .quantity(1)
        .color(product.color)
        .price(product.prices[0])
        .size(product.prices[0].size)
        .build();

    return cartAction2Handler(cartModal, cartStore)
}


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
    return products.sort((a, b) => b.prices[0].price - a.prices[0].price);
}


/**
 * Sorts an array of ProductModal instances by their price in ascending order.
 *
 * @param products - The array of ProductModal instances to be sorted.
 * @returns The sorted array of ProductModal instances.
 */
const sortPriceLowToHigh = (products: ProductModal[]): ProductModal[] => {
    return products.sort((a, b) => a.prices[0].price - b.prices[0].price);
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
        if(a.stock.status === "AVAILABLE" && b.stock.status === "SOLD_OUT") {
            return -1
        } else if(a.stock.status === "SOLD_OUT" && b.stock.status === "AVAILABLE") {
            return 1
        } else {
            return 0
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

export {ProductModal, ProductBuilder, getPrizeText, processUnderscoreText, cartActionHandler, handleProductSorting}