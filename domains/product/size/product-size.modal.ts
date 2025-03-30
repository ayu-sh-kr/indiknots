

export class ProductSizeModal {
    id!: number;
    length!: number;
    width!: number;
    sizeUnit!: string;

    constructor() {
    }

    static builder() {
        return new ProductSizeBuilder();
    }
}

export class ProductSizeBuilder {
    private readonly size;

    constructor() {
        this.size = new ProductSizeModal();
    }

    id(id: number): ProductSizeBuilder {
        this.size.id = id;
        return this;
    }

    length(length: number): ProductSizeBuilder {
        this.size.length = length;
        return this;
    }

    width(width: number): ProductSizeBuilder {
        this.size.width = width;
        return this;
    }

    sizeUnit(sizeUnit: string): ProductSizeBuilder {
        this.size.sizeUnit = sizeUnit;
        return this;
    }

    build() {
        return this.size;
    }
}