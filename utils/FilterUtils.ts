import type {ProductModal} from "~/domains/product/product.modal";


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

const filterByPrice = (value: number, filter: RangeType, products: ProductModal[]) => {
    switch (filter) {
        case "IN-Range": {
            return products.filter(product => {
                return product.variants[0].price.value <= value;
            })
        }

        case "OFF-Range": {
            return products.filter(products => {
                return products.variants[0].price.value > value;
            })
        }
    }
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
    const filteredByPrice = filterByPrice(filter.price.value, filter.price.range, products);

    switch (filter.filterType) {
        case "INTERSECTION": {
            return filteredByCategories.filter(product => {
                return filteredByMaterials.includes(product) && filteredByTechniques.includes(product) && (filter.price.value > 0 ? filteredByPrice.includes(product) : true);
            });
        }

        case "UNION": {
            const unionSet = new Set<ProductModal>([
                ...filteredByCategories,
                ...filteredByMaterials,
                ...filteredByTechniques,
                ...filteredByPrice
            ]);

            return Array.from(unionSet);
        }
    }
}


const defaultCategoryFilter = (category: ProductCategory): ProductFilter => {
    return {
        material: [],
            category: [category],
        technique: [],
        price: {
        value: 0,
            range: "OFF-Range"
    },
        filterType: "UNION"
    }
}


const defaultTechniqueFilter = (technique: ProductTechnique): ProductFilter => {
    return {
        material: [],
        category: [],
        technique: [technique],
        price: {
            value: 0,
            range: "OFF-Range"
        },
        filterType: "UNION"
    }
}

export {handleProductFiltering, defaultCategoryFilter, defaultTechniqueFilter}