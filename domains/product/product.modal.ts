import {ProductVariantModal} from "~/domains/product/variant/product-variant.modal";

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
    stock!: ProductStock;
    variants!: ProductVariantModal[]

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

    static builder() {
        return new ProductBuilder();
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

    description(description: string): ProductBuilder {
        this.product.description = description;
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

    variants(variants: ProductVariantModal[]): ProductBuilder {
        this.product.variants = variants;
        return this;
    }
  build(): ProductModal {
        return this.product;
    }
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




const getSizeText = (size: ProductSize) => {
    return `${size.length} x ${size.width} ${size.unit}`
}

const getDiscountedPrice = (price: ProductPrice) => {
    const originalPrice = price.value;
    const discount = price.sale_percentage;
    const discountPrice = originalPrice - originalPrice * (discount / 100);
    return Math.round(discountPrice * 100) / 100;
}


export {ProductModal, ProductBuilder, processUnderscoreText, getSizeText, getDiscountedPrice}