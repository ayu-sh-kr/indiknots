import {ProductPriceModal} from "~/domains/price/product-price.modal";

export class PriceDTO implements ModalDTO<ProductPriceModal>{
    id: number;
    value: number;
    sales: boolean;
    salesPercentage: number;

    constructor(
        id: number,
        value: number,
        sales: boolean,
        salesPercentage: number,
    ) {
        this.id = id;
        this.value = value;
        this.sales = sales;
        this.salesPercentage = salesPercentage;
    }

    toEntity(): ProductPriceModal {
        // Placeholder for converting PriceDTO to an entity.
        return ProductPriceModal.builder()
            .id(this.id)
            .value(this.value)
            .sales(this.sales)
            .salesPercentage(this.salesPercentage)
            .build();
    }

    static convert(data: any): PriceDTO {
        return new PriceDTO(
            data.id,
            data.value,
            data.sales,
            data.salesPercentage
        );
    }
}