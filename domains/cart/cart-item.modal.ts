import type {ProductModal} from "~/domains/product/product.modal";
import type {ProductVariantModal} from "~/domains/product/variant/product-variant.modal";
import {ProductUtils} from "~/domains/product/product.utils";


class CartItemModal {
    id!: number;
    quantity!: number;
    productId!: string;
    product!: ProductModal;
    variant!: ProductVariantModal;
    price!: number;

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
        return new CartItemModalBuilder();
    }
}

class CartItemModalBuilder {
    private readonly cart: CartItemModal;

    constructor() {
        this.cart = new CartItemModal();
    }

    id(id: number): CartItemModalBuilder {
        this.cart.id = id;
        return this;
    }

    product(product: ProductModal): CartItemModalBuilder {
        this.cart.product = product;
        return this;
    }

    quantity(count: number): CartItemModalBuilder {
        this.cart.quantity = count;
        return this;
    }

    productId(productId: string): CartItemModalBuilder {
        this.cart.productId = productId;
        return this;
    }

    price(price: number): CartItemModalBuilder {
        this.cart.price = price;
        return this;
    }

    variant(variant: ProductVariantModal): CartItemModalBuilder {
      this.cart.variant = variant;
      return this;
    }

    build(): CartItemModal {
      if (!this.cart.productId) {
        this.cart.productId = this.cart.product.id;
      }
        return this.cart;
    }
}

export {CartItemModal, CartItemModalBuilder}