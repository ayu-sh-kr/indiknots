import {ProductSizeModal} from "~/domains/product/size/product-size.modal";
import {ProductStockModal} from "~/domains/product/stock/product-stock.modal";
import {ProductPriceModal} from "~/domains/product/price/product-price.modal";
import {ProductImageModal} from "~/domains/product/image/product-image.modal";


export class ProductVariantModal {

    id!: number;
    productId!: number;
    size!: ProductSizeModal;
    stock!: ProductStockModal;
    price!: ProductPriceModal;
    images!: ProductImageModal[];

    constructor() {
    }

    static builder() {
        return new ProductVariantBuilder();
    }

}


export class ProductVariantBuilder {
    private readonly variant: ProductVariantModal;

    constructor() {
        this.variant = new ProductVariantModal();
    }

    id(id: number): ProductVariantBuilder {
        this.variant.id = id;
        return this;
    }

    productId(productId: number): ProductVariantBuilder {
        this.variant.productId = productId;
        return this;
    }

    size(size: ProductSizeModal): ProductVariantBuilder {
        this.variant.size = size;
        return this;
    }

    stock(stock: ProductStockModal): ProductVariantBuilder {
        this.variant.stock = stock;
        return this;
    }

    price(price: ProductPriceModal): ProductVariantBuilder {
        this.variant.price = price;
        return this;
    }

    images(images: ProductImageModal[]): ProductVariantBuilder {
        this.variant.images = images;
        return this;
    }

    build() {
        return this.variant;
    }
}