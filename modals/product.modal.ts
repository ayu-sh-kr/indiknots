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
    sizes!: ProductSize[];
    technique!: ProductTechnique;
    stock!: ProductStock

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
        const originalPrice = price.value;
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
        this.product.sizes = size;
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
            .size(extractSizes(this.product.prices))
            .stock(extractTotalStock(this.product.sizes))
            .technique(product.technique)
        return this;
    }

    build(): ProductModal {
        if(!this.product.sizes) {
            this.size(extractSizes(this.product.prices))
            this.stock(this.product.sizes)
        }
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
    return price ? `USD. ${price.value}` : 'Price not found';
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

const extractTotalStock = (sizes: ProductSize[]): ProductStock => {
    let total = 0;
    sizes.forEach(size => {
        total += size.stock.quantity
    })

    if(total > 0) {
        return {quantity: total, status: "AVAILABLE"}
    }

    return {quantity: 0, status: "SOLD_OUT"}
}

const extractSizes = (prices: ProductPrice[]): ProductSize[] => {
    return prices.map(price => price.size);
}

const getSizeText = (size: ProductSize) => {
    return `${size.length} x ${size.width} ${size.unit}`
}

const getDiscountedPrice = (price: ProductPrice) => {
    const originalPrice = price.value;
    const discount = price.sale_percentage;
    const discountPrice = originalPrice - originalPrice * (discount / 100);
    return Math.round(discountPrice * 100) / 100;
}


export {ProductModal, ProductBuilder, getPrizeText, processUnderscoreText, cartActionHandler, getSizeText, getDiscountedPrice}