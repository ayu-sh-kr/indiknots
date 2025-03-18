
export class ProductImageModal {

    id!: number;
    url!: string;
    variantId!: number;
    productId!: number;

    constructor() {
    }

    static builder() {
        return new ProductImageBuilder();
    }

}

export class ProductImageBuilder {
    private readonly image: ProductImageModal;

    constructor() {
        this.image = new ProductImageModal();
    }

    id(id: number): ProductImageBuilder {
        this.image.id = id;
        return this;
    }

    url(url: string): ProductImageBuilder {
        this.image.url = url;
        return this;
    }

    variantId(variantId: number): ProductImageBuilder {
        this.image.variantId = variantId;
        return this;
    }

    productId(productId: number): ProductImageBuilder {
        this.image.productId = productId;
        return this;
    }

    build() {
        return this.image;
    }
}