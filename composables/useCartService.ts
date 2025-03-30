import {CartService} from "~/domains/cart/cart.service";

export const useCartService = () => {
  return new CartService(
    useCartStore(),
    useLoginService(),
    useRuntimeConfig().public.apiUrl
  );
}