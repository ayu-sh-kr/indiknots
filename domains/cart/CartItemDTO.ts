import {CartItemModal} from "~/domains/cart/cart-item.modal";
import {EnrichedProductDTO} from "~/domains/product/EnrichedProductDTO";
import {ProductVariantDTO} from "~/domains/product/variant/ProductVariantDTO";

export class CartItemDTO implements ModalDTO<CartItemModal>{

  id: number;
  cartId: number;
  product: EnrichedProductDTO;
  variant: ProductVariantDTO;
  quantity: number;
  price: number;

  constructor(
    id: number, cartId: number, product: EnrichedProductDTO,
    variant: ProductVariantDTO, quantity: number, price: number
  ) {
    this.id = id;
    this.cartId = cartId;
    this.product = product;
    this.variant = variant;
    this.quantity = quantity;
    this.price = price;
  }

  toEntity(): CartItemModal {
    return CartItemModal.builder()
      .id(this.id)
      .product(this.product.toEntity())
      .variant(this.variant.toEntity())
      .quantity(this.quantity)
      .price(this.price)
      .build();
  }

  static convert(data: any): CartItemDTO {
    return new CartItemDTO(
      data.id,
      data.cartId,
      EnrichedProductDTO.convert(data.product),
      ProductVariantDTO.convert(data.variant),
      data.quantity,
      data.price
    );
  }
}

export type CartItemRequest = {
  productId: string;
  variantId: number;
  quantity: number;
}