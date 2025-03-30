import {OrderService} from "~/domains/order/order.service";
import {useLoginService} from "~/composables/useLoginService";
import {useOrderStore} from "~/stores/order.store";

export const useOrderService = () => {
  return new OrderService(
    useRuntimeConfig().public.apiUrl,
    useOrderStore(),
    useLoginService()
  )
}