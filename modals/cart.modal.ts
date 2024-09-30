import type {ProductModal} from "~/modals/product.modal";

/**
 * Represents an item in the shopping cart.
 * @implements CartItem - Interface for the Cart Data
 */
class CartModal implements CartItem {
    color!: string;
    quantity!: number;
    price!: ProductPrice;
    productId!: string;
    size!: ProductSize;
    product!: ProductModal

    /**
     * Increments the quantity of the product in the cart by 1.
     */
    incrementCount = () => {
        if(this.product.stock.status === "SOLD_OUT") {
            this.quantity = 0
            return;
        }
        if(this.product.stock.quantity === this.quantity) return;
        this.quantity += 1;
        console.log(this.quantity)
    }

    /**
     * Decrements the quantity of the product in the cart by 1.
     * Ensures that the quantity does not go below 1.
     */
    decrementCount = () => {
        if (this.quantity === 1) return;
        this.quantity -= 1;
    }

    /**
     * Gets the selected size of the product as a `ProductSizeOption`.
     * @returns The selected size option.
     */
    selectedSize = () => {
        const sizeOption: ProductSizeOption = {
            label: this.product.getSizeText(this.size),
            value: this.size
        }
        return sizeOption
    }

    /**
     * Updates the selected size based on the new size selected.
     * @param option - The new size of the product in the form of `ProductSizeOption`.
     */
    updateSelectedSize = (option: ProductSizeOption) => {
        this.size = option.value;
        this.updatePrice(this.size)
    }

    /**
     * Update the price of the product based on the selected size.
     * @param size - The new size of the product
     */
    private updatePrice = (size: ProductSize) => {
        const price = this.product.getPrizeBySize(size)

        if(price) {
            this.price = price
        }
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

    price(price: ProductPrice): CartModalBuilder {
        this.cart.price = price;
        return this;
    }

    productId(productId: string): CartModalBuilder {
        this.cart.productId = productId;
        return this;
    }

    size(size: ProductSize): CartModalBuilder {
        this.cart.size = size;
        return this;
    }

    fromCart(cart: CartModal): CartModalBuilder {
        this.product(cart.product)
            .color(cart.color)
            .quantity(cart.quantity)
            .price(cart.price)
            .productId(cart.productId)
            .size(cart.size);
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
    if(!cartStore().isProductExist(cartModal.productId) && cartModal.product.stock.status === "AVAILABLE") {
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
        price += modal.price.price * modal.quantity
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
        discounted += modal.product.getDiscountedPrice(modal.price) * modal.quantity
    });
    return discounted;
}

export {CartModal, CartModalBuilder, cartAction2Handler, getTotalPrice, getDiscountedPrice}