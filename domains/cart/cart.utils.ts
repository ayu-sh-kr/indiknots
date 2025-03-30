import {CartItemModal} from "~/domains/cart/cart-item.modal";
import {ProductUtils} from "~/domains/product/product.utils";
import {CartService} from "~/domains/cart/cart.service";


export class CartUtils {

  /**
   * Handles the action of adding or removing a product from the cart.
   * If the product does not exist in the cart and is available in stock, it adds the product to the cart.
   * If the product already exists in the cart, it removes the product from the cart.
   *
   * @param cartModal - The `CartModal` instance representing the product to be added or removed.
   * @param cartStore - The `CartStore` instance managing the cart state.
   * @returns `true` if the product was added to the cart, `false` if the product was removed from the cart.
   */
  static cartAction2Handler = (cartModal: CartItemModal, cartStore: CartStore) => {
    // Check if user is logged in
    if(!cartStore.isProductExist(cartModal.productId) && ProductUtils.isStockAvailable(cartModal.variant)) {
      cartStore.addToCart(cartModal)
      return true
    } else {
      cartStore.removeFromCart(cartModal.id)
      return false
    }
  }

  /**
   * Handles the action of adding or removing a product from the cart.
   * If the product does not exist in the cart and is available in stock, it adds the product to the cart.
   * If the product already exists in the cart, it removes the product from the cart.
   *
   * @param cartModal - The `CartModal` instance representing the product to be added or removed.
   * @param cartService - The `CartService` instance managing the cart operations.
   */
  static cartAction3Handler = async (cartModal: CartItemModal, cartService: CartService) => {
    if(!(await cartService.existsInCart(cartModal.productId, cartModal.variant.id)) && ProductUtils.isStockAvailable(cartModal.variant)) {
      await cartService.addToCart(cartModal)
      return true;
    } else {
      await cartService.removeFromCart(cartModal);
      return false;
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
  static getTotalPrice = (cartModals: CartItemModal[]) => {
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
  static getDiscountedPrice = (cartModals: CartItemModal[]) => {
    let discounted = 0;
    cartModals.forEach(modal => {
      discounted += ProductUtils.getDiscountedPrice(modal.variant) * modal.quantity
    });
    return discounted;
  }

}