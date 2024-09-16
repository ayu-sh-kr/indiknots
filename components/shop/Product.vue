<script setup lang="ts">

import ProductCard from "~/components/shop/card/ProductCard.vue";
import PCardImage from "~/components/shop/card/PCardImage.vue";
import ViewButton from "~/components/shop/card/ViewButton.vue";
import {useCartStore} from "~/stores/cart.store";
import {cartActionHandler, type ProductModal} from "~/modals/product.modal";

const props = defineProps({
    product: {
        type: Object as PropType<ProductModal>,
        required: true
    }
});

const capitalize = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const processShortDescription = (product: Product) => {
    return `${product.technique.split('_').map(str => capitalize(str)).join(" ")} - ${capitalize(product.category)}, ${product.material.split("_").map(str => capitalize(str)).join(" ")} Rug`
}

const processProductLength = (size: ProductSize) => {

    if(size.width === 0) {
        return `Rounded ${size.length} ${size.unit}`
    }

    return `${size.length} x ${size.width} ${size.unit}`
}

const addToCart = () => {
    let product = props.product;
    cartActionHandler(product, useCartStore);
}

const productView = () => {
    navigateTo({
        path: '/shop/product',
        query: {'id': `${props.product.id}`},
        state: {product: JSON.stringify(props.product)}
    })
}

</script>

<template>
<ProductCard>
    <PCardImage @addCart="addToCart" :url="product.img"/>
    <div class="text-center flex flex-col items-center">
        <h4 class="text-lg font-medium text-gray-800 dark:text-gray-100">{{ product.name.toUpperCase() }}</h4>
        <p class="font-extralight text-gray-600 dark:text-gray-300 text-sm">{{processShortDescription(product)}}</p>
        <p class="font-light text-gray-800/95 dark:text-gray-200/95 mt-2">{{processProductLength(product.size[0])}}</p>
        <ViewButton @click="productView()">
            <p class="text-gray-950 dark:text-gray-50 text-lg group-hover:text-white transition-all">From ${{product.price[0].price}}</p>
        </ViewButton>
    </div>
</ProductCard>
</template>

<style scoped>

</style>