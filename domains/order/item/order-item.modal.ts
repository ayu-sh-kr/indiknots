import {ProductModal} from "~/domains/product/product.modal";
import {ProductVariantModal} from "~/domains/product/variant/product-variant.modal";


export class OrderItemModal {
    id!: number;
    orderId!: number;
    quantity!: number;
    originalPrice!: number;
    discount!: number;
    discountedPrice!: number;
    product!: ProductModal;
    variant!: ProductVariantModal;

    constructor() {
    }

    static builder() {
        return new OrderItemModalBuilder();
    }
}

export class OrderItemModalBuilder {
  private readonly modal: OrderItemModal;

  constructor() {
    this.modal = new OrderItemModal();
  }

  id(value: number): OrderItemModalBuilder {
    this.modal.id = value;
    return this;
  }

  orderId(value: number): OrderItemModalBuilder {
    this.modal.orderId = value;
    return this;
  }

  quantity(value: number): OrderItemModalBuilder {
    this.modal.quantity = value;
    return this;
  }

  originalPrice(value: number): OrderItemModalBuilder {
    this.modal.originalPrice = value;
    return this;
  }

  discount(value: number): OrderItemModalBuilder {
    this.modal.discount = value;
    return this;
  }

  discountedPrice(value: number): OrderItemModalBuilder {
    this.modal.discountedPrice = value;
    return this;
  }

  product(value: ProductModal): OrderItemModalBuilder {
    this.modal.product = value;
    return this;
  }

  variant(value: ProductVariantModal): OrderItemModalBuilder {
    this.modal.variant = value;
    return this;
  }

  build(): OrderItemModal {
    return this.modal;
  }

}