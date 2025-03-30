import {OrderActionModal} from "~/domains/order/action/order-action.modal";


export class OrderActionDTO implements ModalDTO<OrderActionModal>{

  id: number;
  orderId: number;
  status: string;
  comment: string;
  createdAt: Date;

  constructor(id: number, orderId: number, status: string, comment: string, createdAt: Date) {
    this.id = id;
    this.orderId = orderId;
    this.status = status;
    this.comment = comment;
    this.createdAt = createdAt;
  }

  toEntity(): OrderActionModal {
    return OrderActionModal.builder()
      .id(this.id)
      .orderId(this.orderId)
      .status(this.status)
      .comment(this.comment)
      .build();
  }

  static convert(data: any): OrderActionDTO {
    return new OrderActionDTO(
      data.id,
      data.orderId,
      data.status,
      data.comment,
      new Date(data.createdAt)
    );
  }

}