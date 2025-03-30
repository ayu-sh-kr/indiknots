import {ProductDTO} from "~/domains/product/ProductDTO";
import {ProductVariantDTO} from "~/domains/product/variant/ProductVariantDTO";
import {ProductModal} from "~/domains/product/product.modal";


export class EnrichedProductDTO implements ModalDTO<ProductModal> {
  product: ProductDTO;
  variants: ProductVariantDTO[];

  constructor(product: ProductDTO, variants: ProductVariantDTO[]) {
    this.product = product;
    this.variants = variants;
  }

  toEntity(): ProductModal {
    const productDTO = this.product;

    return ProductModal.builder()
      .id(productDTO.id.toString())
      .name(productDTO.name)
      .description(productDTO.description)
      .category(productDTO.category)
      .shape(productDTO.shape)
      .material(productDTO.material)
      .technique(productDTO.technique)
      .animalFriendly(productDTO.isAnimalFriendly)
      .variants(this.variants.map(variant => variant.toEntity()))
      .build();
  }

  static convert(data: any): EnrichedProductDTO {
    return new EnrichedProductDTO(
      ProductDTO.convert(data.product),
      data.variants.map((variant: any) => ProductVariantDTO.convert(variant))
    );
  }
}