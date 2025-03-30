import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {ProductModal} from "~/domains/product/product.modal";

export const useProductStore = defineStore('products', () => {

  const products = ref<ProductModal[]>([]);

  /**
   * Removes a product by its ID.
   * @param id - The ID of the product to remove.
   */
  function removeById(id: string) {
    products.value = products.value.filter(item => item.id !== id);
  }

  function clearProducts() {
    products.value = [];
  }

  async function getById(id: string): Promise<ProductModal | undefined> {
    return products.value.find(product => product.id === id)
  }


  /**
   * Retrieves a paginated list of products from local storage.
   * @param page - The page number to retrieve.
   * @param size - The number of items per page.
   * @returns An array of products for the specified page.
   */
  function getByPage(page: number, size: number = 10) {
    const start = (page - 1) * size;
    const end = start + size;

    return products.value.slice(start, end);
  }

  /**
   * Updates the product list with new items.
   * @param items - Array of ProductModal objects to set.
   */
  function setProduct(items: ProductModal[]) {
    products.value = items;
  }

  /**
   * Appends new items to the product list at a specific page.
   * @param page - The page number to append items to.
   * @param items - Array of ProductModal objects to append.
   */
  function appendProducts(page: number, items: ProductModal[]) {
    const start = (page - 1) * items.length;
    const end = start + items.length;

    products.value.splice(start, end, ...items);

  }

  return {
    products, removeById, clearProducts,
    getById, setProduct, getByPage, appendProducts
  }
});

export type ProductStore = ReturnType<typeof useProductStore>;