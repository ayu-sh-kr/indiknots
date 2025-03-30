

export class ProductStockModal implements ProductStock{

    id!: number;
    quantity!: number;
    status!: ProductStockStatus;

    constructor() {
    }


    static builder() {
        return new ProductStockBuilder();
    }
}

export class ProductStockBuilder {

    private readonly stock: ProductStockModal;

    constructor() {
        this.stock = new ProductStockModal();
    }

    id(id: number): ProductStockBuilder {
        this.stock.id = id;
        return this;
    }

    quantity(quantity: number): ProductStockBuilder {
        this.stock.quantity = quantity;
        return this;
    }

    status(status: ProductStockStatus): ProductStockBuilder {
        this.stock.status = status;
        return this;
    }

    build() {
        return this.stock;
    }
}