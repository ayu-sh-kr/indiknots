import type {ProductModal} from "~/modals/product.modal";

class CartModal implements CartItem {
    color!: string;
    count!: number;
    price!: ProductPrice;
    productId!: string;
    size!: ProductSize;
    product!: ProductModal
}