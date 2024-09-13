export class ProductModal implements Product {

    id!: string
    animal_friendly!: boolean;
    category!: ProductCategory;
    color!: string;
    description!: string;
    img!: string;
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
        return this.processUnderscoreText(this.material)
    }

    getTechniqueText = () => {
        return this.processUnderscoreText(this.technique)
    }

    getCategoryText = () => {
        return this.processUnderscoreText(this.category)
    }

    processUnderscoreText = (text: string) => {
        return text.split("_").join(" ")
    }

}

export class ProductBuilder {

    private product: ProductModal;

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

    Category(category: ProductCategory): ProductBuilder {
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

    img(img: string): ProductBuilder {
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
        this.product.id = product.id;
        this.product.animal_friendly = product.animal_friendly;
        this.product.category = product.category;
        this.product.color = product.color;
        this.product.description = product.description;
        this.product.img = product.img;
        this.product.material = product.material;
        this.product.name = product.name;
        this.product.price = product.price;
        this.product.sale = product.sale;
        this.product.shape = product.shape;
        this.product.size = product.size;
        this.product.stock = product.stock;
        this.product.technique = product.technique;
        return this;
    }

    build(): ProductModal {
        return this.product;
    }
}