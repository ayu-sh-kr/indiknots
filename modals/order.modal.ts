

class OrderModal implements Order {

    id!: number;
    unit!: OrderUnit;
    address!: Address;
    status!: OrderStatus[];
    invoice!: string;
    action!: OrderAction;

    constructor() {
    }

    static builder() {
        return new OrderModalBuilder();
    }

}


class OrderModalBuilder {
    private readonly modal: OrderModal;

    constructor() {
        this.modal = new OrderModal();
    }

    id(value: number): OrderModalBuilder {
        this.modal.id = value;
        return this;
    }

    unit(value: OrderUnit): OrderModalBuilder {
        this.modal.unit = value;
        return this;
    }

    address(value: Address): OrderModalBuilder {
        this.modal.address = value;
        return this;
    }

    status(value: OrderStatus[]): OrderModalBuilder {
        this.modal.status = value;
        return this;
    }

    invoice(value: string): OrderModalBuilder {
        this.modal.invoice = value;
        return this;
    }

    action(value: OrderAction): OrderModalBuilder {
        this.modal.action = value;
        return this;
    }

    fromOrder(order: Order): OrderModalBuilder {
        this.id(order.id)
            .unit(order.unit)
            .address(order.address)
            .status(order.status)
            .invoice(order.invoice)
            .action(order.action);

        return this;
    }

    build() {
        return this.modal
    }
}

export {OrderModal, OrderModalBuilder}