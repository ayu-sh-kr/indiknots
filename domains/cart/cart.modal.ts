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


/**
 * Handles the action of adding or removing a product from the cart.
 * If the product does not exist in the cart and is available in stock, it adds the product to the cart.
 * If the product already exists in the cart, it removes the product from the cart.
 *
 * @param cartModal - The `CartModal` instance representing the product to be added or removed.
 * @param cartStore - The `CartStore` instance managing the cart state.
 * @returns `true` if the product was added to the cart, `false` if the product was removed from the cart.
 */
const cartAction2Handler = (cartModal: CartModal, cartStore: CartStore) => {
    if(!cartStore().isProductExist(cartModal.productId) && cartModal.variant.stock.status === "AVAILABLE") {
        cartStore().addToCart(cartModal)
        return true
    } else {
        cartStore().removeFromCart(cartModal.productId)
        return false
    }
}


/**
 * Calculates the total price of all items in the cart.
 *
 * This function iterates over each `CartModal` item in the provided array,
 * multiplies the price of each item by its quantity, and sums up these values
 * to get the total price.
 *
 * @param cartModals - An array of `CartModal` instances representing the items in the cart.
 * @returns The total price of all items in the cart.
 */
const getTotalPrice = (cartModals: CartModal[]) => {
    let price = 0;
    cartModals.forEach(modal => {
        price += modal.variant.price.value * modal.quantity
    });

    return price;
}


/**
 * Calculates the total discounted price of all items in the cart.
 *
 * This function iterates over each `CartModal` item in the provided array,
 * multiplies the discounted price of each item by its quantity, and sums up these values
 * to get the total discounted price.
 *
 * @param cartModals - An array of `CartModal` instances representing the items in the cart.
 * @returns The total discounted price of all items in the cart.
 */
const getDiscountedPrice = (cartModals: CartModal[]) => {
    let discounted = 0;
    cartModals.forEach(modal => {
        discounted += ProductUtils.getDiscountedPrice(modal.variant) * modal.quantity
    });
    return discounted;
}

export {CartModal, CartModalBuilder, cartAction2Handler, getTotalPrice, getDiscountedPrice}