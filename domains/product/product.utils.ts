import type {ProductVariantModal} from "~/domains/variant/product-variant.modal";


export class ProductUtils {

  static getSizeText(variant: ProductVariantModal) {
    const size = variant.size;
    return `${size.length} x ${size.width} ${size.sizeUnit}`;
  }

  static getDiscountedPrice(variant: ProductVariantModal) {
    const price = variant.price;

    const originalPrice = price.value;
    const discount = price.salesPercentage;
    const discountPrice = originalPrice - originalPrice * (discount / 100);
    return Math.round(discountPrice * 100) / 100;
  }

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

  static getPrizeText(variant: ProductVariantModal) {
    const price = variant.price;
    return price ? `USD. ${price.value}` : 'Price not found';
  }

  static getProductImages(variants: ProductVariantModal[]) {
    return variants.flatMap(variant => variant.images);
  }

  static getVariantFromSizeOption(variants: ProductVariantModal[], option: ProductSizeOption) {
    return variants.find(variant => {
      return variant.size.length === option.value.length &&
        variant.size.width === option.value.width &&
        variant.size.sizeUnit === option.value.unit;
    });
  }

  static isStockAvailable(variant: ProductVariantModal) {
    return variant.stock.status === 'AVAILABLE' && variant.stock.quantity > 0;
  }

  static isAnyAvailable(variants: ProductVariantModal[]) {
    return variants.some(variant => {
      return this.isStockAvailable(variant);
    });
  }

}