import {ProductStockModal} from "~/domains/product/stock/product-stock.modal";

export class StockDTO implements ModalDTO<ProductStockModal>{
    id: number;
    quantity: number;
    status: ProductStockStatus;

    constructor(
        id: number,
        quantity: number,
        status: ProductStockStatus,
    ) {
        this.id = id;
        this.quantity = quantity;
        this.status = status;
    }

    toEntity(): ProductStockModal {
        return ProductStockModal.builder()
            .id(this.id)
            .quantity(this.quantity)
            .status(this.status)
            .build();
    }

    static convert(data: any): StockDTO {
        return new StockDTO(
            data.id,
            data.quantity,
            data.status
        );
    }
}