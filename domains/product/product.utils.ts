import type {ProductVariantModal} from "~/domains/variant/product-variant.modal";
import type {ProductImageModal} from "~/domains/image/product-image.modal";
import type {ProductModal} from "~/domains/product/product.modal";
import {capitalize} from "~/utils/GeneralUtils";
import type {ProductSizeModal} from "~/domains/size/product-size.modal";


export class ProductUtils {

  /**
   * Generates a text representation of the size of a product variant.
   * @param variant The product variant for which to generate the size text.
   * @return A string representing the size in the format "length x width unit".
   */
  static getSizeText(variant: ProductVariantModal) {
    const size = variant.size;
    return `${size.length} x ${size.width} ${size.sizeUnit}`;
  }

  /**
   * Calculates the discounted price of a product variant
   * based on its original price and sales percentage.
   * @param variant The product variant for which to calculate the discounted price.
   * @return The discounted price rounded to two decimal places.
   */
  static getDiscountedPrice(variant: ProductVariantModal) {
    const price = variant.price;

    const originalPrice = price.value;
    const discount = price.salesPercentage;
    const discountPrice = originalPrice - originalPrice * (discount / 100);
    return Math.round(discountPrice * 100) / 100;
  }

  /**
   * Generates an array of size options for a product based on its variants.
   * @param variants An array of product variants.
   * @return An array of size options, each containing a label and a value object with length, width, unit, and stock information.
   */
  static getSizeOptions(variants: ProductVariantModal[]): ProductSizeOption[] {
    return variants.map(variant => {
      return {
        label: ProductUtils.getSizeText(variant),
        value: {
          length: variant.size.length,
          width: variant.size.width,
          unit: variant.size.sizeUnit,
          stock: variant.stock,
        }
      } as ProductSizeOption
    })
  }

  /**
   * Generates a text representation of the price for a product variant.
   * @param variant The product variant for which to generate the price text.
   * @return A string representing the price in USD, or a message indicating that the price was not found.
   */
  static getPrizeText(variant: ProductVariantModal) {
    const price = variant.price;
    return price ? `USD. ${price.value}` : 'Price not found';
  }

  /**
   * Generates an array of image URLs for a product based on its variants.
   * @param variants An array of product variants.
   * @return An array of {@link ProductImageModal} objects, each containing a URL for the product image.
   */
  static getProductImages(variants: ProductVariantModal[]): ProductImageModal[] {
    return variants.flatMap(variant => variant.images);
  }

  /**
   * Finds a product variant that matches the given size option.
   * @param variants An array of product variants.
   * @param option The size option to match against.
   * @return The matching product variant, or undefined if no match is found.
   */
  static getVariantFromSizeOption(variants: ProductVariantModal[], option: ProductSizeOption) {
    return variants.find(variant => {
      return variant.size.length === option.value.length &&
        variant.size.width === option.value.width &&
        variant.size.sizeUnit === option.value.unit;
    });
  }

  /**
   * Checks if a product variant is available in stock.
   * @param variant The product variant to check.
   * @return `true` if the variant is available in stock, `false` otherwise.
   */
  static isStockAvailable(variant: ProductVariantModal) {
    return variant.stock.status === 'AVAILABLE' && variant.stock.quantity > 0;
  }

  /**
   * Checks if any product variant is available in stock.
   * @param variants An array of product variants to check.
   * @return `true` if any variant is available in stock, `false` otherwise.
   */
  static isAnyAvailable(variants: ProductVariantModal[]) {
    return variants.some(variant => {
      return this.isStockAvailable(variant);
    });
  }

  /**
   * Finds a product variant by its ID.
   * @param product The product containing the variants.
   * @param variantId The ID of the variant to find.
   * @return The matching product variant, or undefined if no match is found.
   */
  static getVariantFromProduct(product: ProductModal, variantId: number) {
    return product.variants.find(variant => variant.id === variantId);
  }

  /**
   * Generates a short description for a product based on its properties.
   * @param product The product for which to generate the short description.
   * @return A string representing the short description of the product.
   */
  static getShortDescription(product: ProductModal) {
    return `${product.technique.split('_').map(str => capitalize(str)).join(" ")} - ${capitalize(product.category)}, ${product.material.split("_").map(str => capitalize(str)).join(" ")} Rug`
  }

  /**
   * Generates a text representation of the length and width of a product size.
   * @param size The product size for which to generate the length text.
   * @return A string representing the length and width in the format "length x width unit" or "Rounded length unit".
   */
  static getLengthText(size: ProductSizeModal) {
    if(size.width === 0) {
      return `Rounded ${size.length} ${size.sizeUnit}`
    }

    return `${size.length} x ${size.width} ${size.sizeUnit}`
  }

}