import type {ProductModal} from "~/modals/product.modal";

class CartModal implements CartItem {
    color!: string;
    quantity!: number;
    price!: ProductPrice;
    productId!: string;
    size!: ProductSize;
    product!: ProductModal

    incrementCount = () => {
        this.quantity += 1;
        console.log(this.quantity)
    }

    decrementCount = () => {
        if (this.quantity === 1) return;
        this.quantity -= 1;
    }

    selectedSize = () => {
        const sizeOption: ProductSizeOption = {
            label: this.product.getSizeText(this.size),
            value: this.size
        }
        return sizeOption
    }

    updateSelectedSize = (option: ProductSizeOption) => {
        this.size = option.value;
        this.updatePrice(this.size)
    }

    updatePrice = (size: ProductSize) => {
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


const cartAction2Handler = (cartModal: CartModal, cartStore: CartStore) => {
    if(!cartStore().isProductExist(cartModal.productId) && cartModal.product.stock === "AVAILABLE") {
        cartStore().addToCart(cartModal)
        return true
    } else {
        cartStore().removeFromCart(cartModal.productId)
        return false
    }
}

const getTotalPrice = (cartModals: CartModal[]) => {
    let price = 0;
    cartModals.forEach(modal => {
        price += modal.price.price * modal.quantity
    });

    return price;
}

const getDiscountedPrice = (cartModals: CartModal[]) => {
    let discounted = 0;
    cartModals.forEach(modal => {
        discounted += modal.product.getDiscountedPrice(modal.price) * modal.quantity
    });
    return discounted;
}

export {CartModal, CartModalBuilder, cartAction2Handler, getTotalPrice, getDiscountedPrice}