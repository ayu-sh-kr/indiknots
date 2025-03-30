import {RestClient} from "@ayu-sh-kr/dota-rest";
import {defaultResponseHandler} from "~/utils/GeneralUtils";
import type {LoginService} from "~/domains/security/login.service";
import {type CreateOrderRequest, OrderDTO} from "~/domains/order/OrderDTO";

export class OrderService {

  private restClient: RestClient;

  constructor(
    uri: string,
    private orderStore: OrderStore,
    private loginService: LoginService
  ) {
    this.restClient = RestClient.create()
      .baseUrl(uri)
      .handler(defaultResponseHandler)
      .defaultHeaders({
        'Authorization': `Bearer ${this.loginService.getAccessToken()}`
      })
      .build();
  }

  /**
   * Fetches orders from the server or from the store if already present.
   * If the store is empty, it fetches the orders from the server and updates the store.
   * If the store is not empty, it returns the orders from the store.
   */
  async getOrRefreshOrders() {
    if (this.orderStore.getOrdersSize() > 0) {
      return this.orderStore.orders
    } else {
      return await this.fetchOrders();
    }
  }


  /**
   * Fetches all orders from the server and updates the store.
   * @returns - A promise that resolves to an array of OrderModal objects.
   */
  async fetchOrders() {
    const entity = await this.restClient.get<OrderDTO[]>()
      .uri('/order/v1/fetch-all')
      .converter((data) => data.map((item: any) => OrderDTO.convert(item)))
      .retrieve()
      .toEntity();

    const orders = entity.data.map(item => item.toEntity());
    this.orderStore.clearAndAdd(orders);
    return orders;
  }


  /**
   * Fetches a single order by its ID from the server.
   * @param id - The ID of the order to fetch.
   * @returns - A promise that resolves to an OrderModal object.
   */
  async fetchOne(id: number) {
    const entity = await this.restClient.get<OrderDTO>()
      .uri(`/order/v1/fetch-one`)
      .param({key: 'order-id', value: id})
      .converter(OrderDTO.convert)
      .retrieve()
      .toEntity();

    return entity.data.toEntity();
  }

  /**
   * Creates a new order on the server.
   * @param request - The request object containing order details.
   * @returns - A promise that resolves to an OrderModal object.
   */
  async createOrder(request: CreateOrderRequest) {
    const entity = await this.restClient.post<OrderDTO>()
      .uri('/order/v1/create-order')
      .converter(OrderDTO.convert)
      .body(request)
      .retrieve()
      .toEntity();

    return entity.data.toEntity();
  }

}