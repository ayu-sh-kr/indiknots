

export class ProductPriceModal {

    id!: number;
    value!: number;
    sales!: boolean;
    salesPercentage!: number;

    constructor() {
    }

    static builder() {
        return new ProductPriceBuilder();
    }
}

export class ProductPriceBuilder {

    private readonly price: ProductPriceModal;

    constructor() {
        this.price = new ProductPriceModal();
    }

    id(id: number): ProductPriceBuilder {
        this.price.id = id;
        return this;
    }

    sales(sales: boolean): ProductPriceBuilder {
        this.price.sales = sales;
        return this;
    }

    salesPercentage(salesPercentage: number): ProductPriceBuilder {
        this.price.salesPercentage = salesPercentage;
        return this;
    }

    value(value: number): ProductPriceBuilder {
        this.price.value = value;
        return this;
    }

    build() {
        return this.price;
    }
}