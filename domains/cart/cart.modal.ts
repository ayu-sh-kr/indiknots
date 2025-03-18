import type {ProductModal} from "~/domains/product/product.modal";
import type {ProductVariantModal} from "~/domains/variant/product-variant.modal";
import {ProductUtils} from "~/domains/product/product.utils";

/**
 * Represents an item in the shopping cart.
 * @implements CartItem - Interface for the Cart Data
 */
class CartModal {
    color!: string;
    quantity!: number;
    productId!: string;
    product!: ProductModal;
    variant!: ProductVariantModal

    /**
     * Increments the quantity of the product in the cart by 1.
     */
    incrementCount = () => {
        if(!ProductUtils.isStockAvailable(this.variant)) {
            return;
        }
        if(this.variant.stock.quantity === this.quantity) return;
        this.quantity += 1;
    }

    /**
     * Decrements the quantity of the product in the cart by 1.
     * Ensures that the quantity does not go below 1.
     */
    decrementCount = () => {
        if (!ProductUtils.isStockAvailable(this.variant)) {
            return;
        }

        if(this.quantity === 1) return;

        this.quantity -= 1;
    }

    /**
     * Gets the selected size of the product as a `ProductSizeOption`.
     * @returns The selected size option.
     */
    selectedSize = () => {
        return {
            label: ProductUtils.getSizeText(this.variant),
            value: {
                length: this.variant.size.length,
                width: this.variant.size.width,
                unit: this.variant.size.sizeUnit,
                stock: this.variant.stock
            }
        }
    }

    updateVariant = (variant: ProductVariantModal) => {
      const includes = this.product.variants.includes(variant);
      if(!includes) return;
      this.variant = variant;
    }


    static builder() {
        return new CartModalBuilder();
    }
}

class CartModalBuilder {
    private readonly cart: CartModal;

    constructor() {
        this.cart = new CartModal();
    }

    product(product: ProductModal): CartModalBuilder {
        this.cart.product = product;
        return this;
    }

    color(color: string): CartModalBuilder {
        this.cart.color = color;
        return this;
    }

    quantity(count: number): CartModalBuilder {
        this.cart.quantity = count;
        return this;
    }

    productId(productId: string): CartModalBuilder {
        this.cart.productId = productId;
        return this;
    }

    variant(variant: ProductVariantModal): CartModalBuilder {
      this.cart.variant = variant;
      return this;
    }

    build(): CartModal {
        return this.cart;
    }
}

export {CartModal, CartModalBuilder}