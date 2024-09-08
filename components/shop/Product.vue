<script setup lang="ts">

import ProductCard from "~/components/shop/card/ProductCard.vue";
import PCardImage from "~/components/shop/card/PCardImage.vue";
import {toast} from "~/composables/useToast";
import ViewButton from "~/components/shop/card/ViewButton.vue";

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true
    },
    cart: {
        type: Map,
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
    let cart = props.cart;

    if(cart.get(product.id)) {
        cart.delete(product.id)
        toast().info(`${props.product.name} removed from cart`)
    } else {
        cart.set(product.id, product.name)
        toast().success(`${props.product.name} added to cart`)
    }
}

</script>

<template>
<ProductCard>
    <PCardImage @addCart="addToCart" :url="product.img"/>
    <div class="text-center flex flex-col items-center">
        <h4 class="text-lg font-medium text-gray-800 dark:text-gray-100">{{ product.name.toUpperCase() }}</h4>
        <p class="font-extralight text-gray-600 dark:text-gray-300 text-sm">{{processShortDescription(product)}}</p>
        <p class="font-light text-gray-800/95 dark:text-gray-200/95 mt-2">{{processProductLength(product.size[0])}}</p>
        <ViewButton @click="() => {
            navigateTo({
                path: '/shop/product',
                query: {'id': `${product.id}`},
                state: {product: JSON.stringify(product)}
            })
        }">
            <p class="text-gray-950 dark:text-gray-50 text-lg group-hover:text-white transition-all">From ${{product.price[0].price}}</p>
        </ViewButton>
    </div>
</ProductCard>
</template>

<style scoped>

</style>