import type {ProductModal} from "~/modals/product.modal";


/**
 * Filters an array of ProductModal instances based on the specified categories.
 *
 * @param products - The array of `ProductModal` instances to be filtered.
 * @param categories - The array of `ProductCategories` to filter the products by.
 * @returns The filtered array of ProductModal instances that belong to the specified categories.
 */
const filterByCategories = (products: ProductModal[], categories: ProductCategory[]): ProductModal[] => {
    return products.filter(product => {
        return categories.includes(product.category);
    })
}


/**
 * Filters an array of ProductModal instances based on the specified materials.
 *
 * @param  products - The array of `ProductModal` instances to be filtered.
 * @param  materials - The array of `ProductMaterials` to filter the products by.
 * @returns The filtered array of ProductModal instances that are made of the specified materials.
 */
const filterByMaterials = (products: ProductModal[], materials: ProductMaterial[]): ProductModal[] => {
    return products.filter(product => {
        return materials.includes(product.material)
    })
}


/**
 * Filters an array of ProductModal instances based on the specified techniques.
 *
 * @param products - The array of `ProductModal` instances to be filtered.
 * @param techniques - The array of `ProductTechniques` to filter the products by.
 * @returns The filtered array of ProductModal instances that use the specified techniques.
 */
const filterByTechniques = (products: ProductModal[], techniques: ProductTechnique[]) => {
    return products.filter(product => {
        return techniques.includes(product.technique)
    });
}


/**
 * Filters an array of ProductModal instances based on the specified filter criteria.
 * The function applies category, material, and technique filters separately and then
 * takes the intersection of the filtered results.
 *
 * @param filter - The filter criteria containing arrays of categories, materials, and techniques.
 * @param products - The array of ProductModal instances to be filtered.
 * @returns The filtered array of ProductModal instances that match all the specified filter criteria.
 */
const handleProductFiltering = (filter: ProductFilter, products: ProductModal[]) => {
    const filteredByCategories = filterByCategories(products, filter.category);
    const filteredByMaterials = filterByMaterials(products, filter.material);
    const filteredByTechniques = filterByTechniques(products, filter.technique);

    switch (filter.filterType) {
        case "INTERSECTION": {
            return filteredByCategories.filter(product => {
                return filteredByMaterials.includes(product) && filteredByTechniques.includes(product);
            });
        }

        case "UNION": {
            const unionSet = new Set<ProductModal>([
                ...filteredByCategories,
                ...filteredByMaterials,
                ...filteredByTechniques
            ]);

            return Array.from(unionSet);
        }
    }
}

export {handleProductFiltering}