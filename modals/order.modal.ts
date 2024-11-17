import type {ProductModal} from "~/modals/product.modal";
import type {AddressModal} from "~/modals/address.modal";


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

const createOrder = (product: ProductModal, address: AddressModal, sizeOption: ProductSizeOption, quantity: number): Order => {
    const prize = product.getPrizeBySize(sizeOption.value)!!;
    return {
        id: parseInt(product.id, 10),
        status: [
            {
                value: "Pending",
                date: new Date(),
                message: "Waiting for confirmation from seller."
            }
        ],
        address: address,
        action: "Cancellable",
        invoice: "",
        unit: {
            quantity: quantity,
            price: quantity * prize.value,
            product: {
                price: prize,
                id: parseInt(product.id, 10),
                color: product.color,
                name: product.name,
                image: product.img[0].url,
                description: product.description
            }
        }
    };
}

export {OrderModal, OrderModalBuilder, createOrder}