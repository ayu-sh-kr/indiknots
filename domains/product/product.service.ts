import {RestClient} from "@ayu-sh-kr/dota-rest";
import {defaultResponseHandler} from "~/utils/GeneralUtils";
import {EnrichedProductDTO} from "~/domains/product/EnrichedProductDTO";


export class ProductService {

  private restClient: RestClient;
  private store: ProductStore;

  constructor(url: string, store: ProductStore) {
    this.restClient = RestClient.create()
      .handler(defaultResponseHandler)
      .build();

    this.store = store;
  }

  async fetchOrRefresh() {
    if (this.store.products.length > 0) {
      return this.store.products;
    } else {
      await this.hardRefreshOrUpdate();
      return this.store.products;
    }
  }

  /**
   * Updates the product list with new items from the server.
   */
  async hardRefreshOrUpdate() {
    const entity = await this.restClient.get<EnrichedProductDTO[]>()
      .uri('/data/product-latest.json')
      .retrieve()
      .converter(data => data.map((item: any) => EnrichedProductDTO.convert(item)))
      .toEntity();

    const products = entity.data.map(item => item.toEntity());
    this.store.setProduct(products);
  }

  async fetchByPage(page: number, size: number = 10) {
    let products = this.store.getByPage(page, size);
    if (products.length > 0) {
      return products;
    }

    const entity = await this.restClient.get<EnrichedProductDTO[]>()
      .uri('/data/product-latest.json')
      .retrieve()
      .converter(data => data.map((item: any) => EnrichedProductDTO.convert(item)))
      .toEntity();

    products = entity.data.map(item => item.toEntity());
    this.store.appendProducts(page, products);

    return products;
  }

  async getById(productId: string) {
    if(this.store.products.length == 0) {
      await this.hardRefreshOrUpdate()
    }
    return this.store.getById(productId);
  }
}