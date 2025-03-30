import {OrderItemDTO, type OrderItemRequest} from "~/domains/order/item/OrderItemDTO";
import {OrderActionDTO} from "~/domains/order/action/OrderActionDTO";
import {OrderModal} from "~/domains/order/order.modal";


export class OrderDTO implements ModalDTO<OrderModal>{
  id: number;
  accountId: number;
  status: string;
  message: string;
  address: Address;
  items: OrderItemDTO[];
  actions: OrderActionDTO[]

  constructor(
    id: number,
    accountId: number,
    status: string,
    message: string,
    address: Address,
    items: OrderItemDTO[],
    actions: OrderActionDTO[]
  ) {
    this.id = id;
    this.accountId = accountId;
    this.status = status;
    this.message = message;
    this.address = address;
    this.items = items;
    this.actions = actions;
  }

  toEntity(): OrderModal {
    return OrderModal.builder()
      .id(this.id)
      .accountId(this.accountId)
      .status(this.status)
      .message(this.message)
      .address(this.address)
      .items(this.items.map(item => item.toEntity()))
      .actions(this.actions.map(action => action.toEntity()))
      .build();
  }

  static convert(data: any): OrderDTO {
    return new OrderDTO(
      data.id,
      data.accountId,
      data.status,
      data.message,
      data.address,
      data.items.map((item: any) => OrderItemDTO.convert(item)),
      data.actions.map((action: any) => OrderActionDTO.convert(action))
    );
  }
}

export type CreateOrderRequest = {
  addressId: number;
  items: OrderItemRequest[];
}