import type {CartStore} from "~/stores/cart.store";
import {cartAction2Handler, CartModalBuilder} from "~/modals/cart.modal";

class ProductModal implements Product {

    id!: string
    animal_friendly!: boolean;
    category!: ProductCategory;
    color!: string;
    description!: string;
    img!: ProductImage[];
    material!: ProductMaterial;
    name!: string;
    price!: ProductPrice[];
    sale!: boolean;
    shape!: ProductShape;
    size!: ProductSize[];
    stock!: ProductStock;
    technique!: ProductTechnique;

    constructor() {
    }

    getPrizeBySize = (size: ProductSize): ProductPrice | undefined => {
        return this.price.find(price => {
            if (price.size.length === size.length && price.size.width === size.width && price.size.unit === size.unit) {
                return price
            }
        });
    }

    getMaterialText = () => {
        return processUnderscoreText(this.material)
    }

    getTechniqueText = () => {
        return processUnderscoreText(this.technique)
    }

    getCategoryText = () => {
        return processUnderscoreText(this.category)
    }

    getSizeText(size: ProductSize) {
        return `${size.length} x ${size.width} ${size.unit}`
    }

    getDiscountedPrice(price: ProductPrice) {
        const originalPrice = price.price;
        const discount = price.sale_percentage;
        const discountPrice = originalPrice - originalPrice * (discount / 100);
        return Math.round(discountPrice * 100) / 100;
    }

    getSizeOptions(): ProductSizeOption[] {
        return this.price.map(price => {
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
        this.product.price = price;
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
            .price(product.price)
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

const getPrizeText = (product: ProductModal, size: ProductSize) => {
    const price = product.getPrizeBySize(size);
    return price ? `USD. ${price.price}` : 'Price not found';
}

const processUnderscoreText = (text: string) => {
    return text.split("_").join(" ")
}

const cartActionHandler = (product: ProductModal, cartStore: CartStore) => {

    const builder = new CartModalBuilder()
    const cartModal = builder.product(product)
        .productId(product.id)
        .count(1)
        .color(product.color)
        .price(product.price[0])
        .size(product.price[0].size)
        .build();

    return cartAction2Handler(cartModal, cartStore)
}

export {ProductModal, ProductBuilder, getPrizeText, processUnderscoreText, cartActionHandler}