import {ProductImageModal} from "~/domains/image/product-image.modal";

export class ImageDTO implements ModalDTO<ProductImageModal>{
    id: number;
    url: string;
    variantId: number;
    productId: number;

    constructor(
        id: number,
        url: string,
        variantId: number,
        productId: number,
    ) {
        this.id = id;
        this.url = url;
        this.variantId = variantId;
        this.productId = productId;
    }

    toEntity(): ProductImageModal {
        return ProductImageModal.builder()
            .id(this.id)
            .url(this.url)
            .variantId(this.variantId)
            .productId(this.productId)
            .build();
    }

    static convert(data: any): ImageDTO {
        return new ImageDTO(
            data.id,
            data.url,
            data.variantId,
            data.productId
        );
    }
}