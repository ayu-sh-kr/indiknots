

export class OrderActionModal {

  id!: number;
  orderId!: number;
  status!: string;
  comment!: string;
  timestamp!: Date;

  constructor() {
  }

  static builder() {
    return new OrderActionModalBuilder();
  }

}

export class OrderActionModalBuilder {
  private readonly modal: OrderActionModal;

  constructor() {
    this.modal = new OrderActionModal();
  }

  id(value: number): OrderActionModalBuilder {
    this.modal.id = value;
    return this;
  }

  orderId(value: number): OrderActionModalBuilder {
    this.modal.orderId = value;
    return this;
  }

  status(value: string): OrderActionModalBuilder {
    this.modal.status = value;
    return this;
  }

  comment(value: string): OrderActionModalBuilder {
    this.modal.comment = value;
    return this;
  }

  timestamp(value: Date): OrderActionModalBuilder {
    this.modal.timestamp = value;
    return this;
  }

  build() {
    return this.modal;
  }
}