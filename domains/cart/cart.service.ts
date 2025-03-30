import {RestClient} from "@ayu-sh-kr/dota-rest";
import {defaultResponseHandler} from "~/utils/GeneralUtils";
import {CartItemModal} from "~/domains/cart/cart-item.modal";
import {CartItemDTO, type CartItemRequest} from "~/domains/cart/CartItemDTO";
import {LoginService} from "~/domains/security/login.service";


export class CartService {

  restClient: RestClient;

  constructor(
    private store: CartStore,
    private loginService: LoginService,
    url: string
  ) {
    this.restClient = RestClient.create()
      .baseUrl(url)
      .handler(defaultResponseHandler)
      .build();
  }

  /**
   * Get cart items from the server or from the store if already present.
   * If the store is empty, it fetches the cart items from the server and updates the store.
   * If the store is not empty, it returns the items from the store.
   *
   */
  async getOrRefreshCart() {

    if(!this.loginService.isLoggedIn()) {
      return this.store.getAll();
    }

    if (this.store.getCartSize() > 0) {
      return this.store.getAll();
    } else {
      const items = await this.getCart();
      this.store.clearAndAdd(items);
      return this.store.getAll();
    }
  }

  async getCart(): Promise<CartItemModal[]> {
    const entity = await this.restClient.get<CartItemDTO[]>()
      .uri('/cart')
      .retrieve()
      .converter((data) => data.map((item: any) => CartItemDTO.convert(item)))
      .toEntity();

    return entity.data.map(item => item.toEntity());
  }

  async addToCart(cartItem: CartItemModal): Promise<CartItemModal> {

    if(!this.loginService.isLoggedIn()) {
      this.store.addToCart(cartItem);
      return cartItem;
    }

    const request: CartItemRequest = {
      productId: cartItem.productId,
      variantId: cartItem.variant.id,
      quantity: cartItem.quantity
    }

    const entity = await this.restClient.post<CartItemDTO>()
      .uri('/cart')
      .body(request)
      .converter(CartItemDTO.convert)
      .retrieve()
      .toEntity();

    const item = entity.data.toEntity();
    this.store.addToCart(item);
    return item;
  }

  async removeFromCart(cartItem: CartItemModal): Promise<void> {

    if(!this.loginService.isLoggedIn()) {
      this.store.removeByItem(cartItem);
      return;
    }

    await this.restClient.delete<void>()
      .uri('/cart')
      .param({key: 'cart-item-id', value: cartItem.id})
      .retrieve()
      .toVoid();
    this.store.removeFromCart(cartItem.id)
  }

  async existsInCart(productId: string, variantId: number): Promise<boolean> {
    if(!this.loginService.isLoggedIn()) {
      return this.store.isProductExists(productId, variantId);
    }

    const entity = await this.restClient.get<void>()
      .uri('/cart/exists')
      .param({key: 'product-id', value: productId})
      .param({key: 'variant-id', value: variantId})
      .retrieve()
      .toVoid();

    return entity.status === 200;
  }

}