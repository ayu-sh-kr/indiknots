import type {ProductModal} from "~/modals/product.modal";

class CartModal implements CartItem {
    color!: string;
    count!: number;
    price!: ProductPrice;
    productId!: string;
    size!: ProductSize;
    product!: ProductModal

    incrementCount = () => {
        this.count += 1;
        console.log(this.count)
    }

    decrementCount = () => {
        if (this.count === 1) return;
        this.count -= 1;
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

    count(count: number): CartModalBuilder {
        this.cart.count = count;
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
            .count(cart.count)
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

export {CartModal, CartModalBuilder, cartAction2Handler}