import {OrderItemModal} from "~/domains/order/item/order-item.modal";
import {OrderActionModal} from "~/domains/order/action/order-action.modal";

export class OrderModal {
    id!: number;
    accountId!: number;
    status!: string;
    message!: string;
    address!: Address;
    items!: OrderItemModal[];
    actions!: OrderActionModal[];

    constructor() {
    }

    static builder() {
        return new OrderModalBuilder();
    }
}

export class OrderModalBuilder {
    private readonly modal: OrderModal;

    constructor() {
        this.modal = new OrderModal();
    }

    id(value: number): OrderModalBuilder {
        this.modal.id = value;
        return this;
    }

    accountId(value: number): OrderModalBuilder {
        this.modal.accountId = value;
        return this;
    }

    status(value: string): OrderModalBuilder {
        this.modal.status = value;
        return this;
    }

    message(value: string): OrderModalBuilder {
        this.modal.message = value;
        return this;
    }

    address(value: Address): OrderModalBuilder {
        this.modal.address = value;
        return this;
    }

    items(value: OrderItemModal[]): OrderModalBuilder {
        this.modal.items = value;
        return this;
    }

    actions(value: OrderActionModal[]): OrderModalBuilder {
        this.modal.actions = value;
        return this;
    }

    build(): OrderModal {
        return this.modal;
    }
}