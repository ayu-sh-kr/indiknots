import {ProductSizeModal} from "~/domains/product/size/product-size.modal";

export class SizeDTO implements ModalDTO<ProductSizeModal>{
    id: number;
    length: number;
    width: number;
    sizeUnit: string;

    constructor(
        id: number,
        length: number,
        width: number,
        sizeUnit: string,
    ) {
        this.id = id;
        this.length = length;
        this.width = width;
        this.sizeUnit = sizeUnit;
    }

    toEntity(): ProductSizeModal {
        return ProductSizeModal.builder()
            .id(this.id)
            .length(this.length)
            .width(this.width)
            .sizeUnit(this.sizeUnit)
            .build();
    }

    static convert(data: any): SizeDTO {
        return new SizeDTO(
            data.id,
            data.length,
            data.width,
            data.sizeUnit
        );
    }
}