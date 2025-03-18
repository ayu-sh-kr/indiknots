import {ProductService} from "~/domains/product/product.service";


export const useProductService = () => {
  return new ProductService(
    useRuntimeConfig().public.apiUrl, useProductStore()
  );
}