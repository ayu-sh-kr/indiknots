import {OrderItemModal} from "~/domains/order/item/order-item.modal";
import {ProductDTO} from "~/domains/product/ProductDTO";
import {ProductVariantDTO} from "~/domains/product/variant/ProductVariantDTO";

export class OrderItemDTO implements ModalDTO<OrderItemModal>{

  id: number;
  orderId: number;
  quantity: number;
  originalPrice: number;
  discount: number;
  discountedPrice: number;
  product: ProductDTO;
  variant: ProductVariantDTO;

  constructor(
    id: number, orderId: number,
    quantity: number, originalPrice: number,
    discount: number, discountedPrice: number,
    product: ProductDTO, variant: ProductVariantDTO
  ) {
    this.id = id;
    this.orderId = orderId;
    this.quantity = quantity;
    this.originalPrice = originalPrice;
    this.discount = discount;
    this.discountedPrice = discountedPrice;
    this.product = product;
    this.variant = variant;
  }


  toEntity(): OrderItemModal {
    return OrderItemModal.builder()
      .id(this.id)
      .orderId(this.orderId)
      .quantity(this.quantity)
      .originalPrice(this.originalPrice)
      .discount(this.discount)
      .discountedPrice(this.discountedPrice)
      .product(this.product.toEntity())
      .variant(this.variant.toEntity())
      .build();
  }

  static convert(data: any): OrderItemDTO {
    return new OrderItemDTO(
      data.id,
      data.orderId,
      data.quantity,
      data.originalPrice,
      data.discount,
      data.discountedPrice,
      ProductDTO.convert(data.product),
      ProductVariantDTO.convert(data.variant)
    );
  }
}

export type OrderItemRequest = {
  orderId: number;
  productId: string;
  variantId: number;
  quantity: number;
}