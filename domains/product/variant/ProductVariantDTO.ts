import {StockDTO} from "~/domains/product/stock/StockDTO";
import {SizeDTO} from "~/domains/product/size/SizeDTO";
import {PriceDTO} from "~/domains/product/price/PriceDTO";
import {ImageDTO} from "~/domains/product/image/ImageDTO";
import {ProductVariantModal} from "~/domains/product/variant/product-variant.modal";

export class ProductVariantDTO implements ModalDTO<ProductVariantModal>{

    id: number;
    productId: number;
    size: SizeDTO;
    stock: StockDTO;
    price: PriceDTO;
    images: ImageDTO[];

    constructor(
        id: number,
        productId: number,
        size: SizeDTO,
        stock: StockDTO,
        price: PriceDTO,
        images: ImageDTO[]
    ) {
        this.id = id;
        this.productId = productId;
        this.size = size;
        this.stock = stock;
        this.price = price;
        this.images = images;
    }

    toEntity(): ProductVariantModal {
        return ProductVariantModal.builder()
            .id(this.id)
            .productId(this.productId)
            .size(this.size.toEntity())
            .stock(this.stock.toEntity())
            .price(this.price.toEntity())
            .images(this.images.map(image => image.toEntity()))
            .build();
    }

    static convert(data: any): ProductVariantDTO {
        return new ProductVariantDTO(
            data.id,
            data.productId,
            SizeDTO.convert(data.size),
            StockDTO.convert(data.stock),
            PriceDTO.convert(data.price),
            data.images.map((image: any) => ImageDTO.convert(image))
        );
    }
}