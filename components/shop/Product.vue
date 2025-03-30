<script setup lang="ts">

import ProductCard from "~/components/shop/card/ProductCard.vue";
import PCardImage from "~/components/shop/card/PCardImage.vue";
import ViewButton from "~/components/shop/card/ViewButton.vue";
import {type ProductModal} from "~/domains/product/product.modal";
import {ProductUtils} from "~/domains/product/product.utils";
import {CartItemModal} from "~/domains/cart/cart-item.modal";
import {CartUtils} from "~/domains/cart/cart.utils";

const props = defineProps({
    product: {
        type: Object as PropType<ProductModal>,
        required: true
    }
});

const addToCart = async () => {
    let product = props.product;
    const cartItem = CartItemModal.builder()
      .productId(product.id)
      .product(product)
      .variant(product.variants[0])
      .quantity(1)
      .price(product.variants[0].price.value)
      .build();

    await CartUtils.cartAction3Handler(cartItem, useCartService())
}

const productView = () => {
    navigateTo({
        path: '/shop/product',
        query: {'id': `${props.product.id}`},
    })
}

</script>

<template>
<ProductCard>
    <PCardImage @addCart="addToCart" :image="ProductUtils.getProductImages(product.variants)[0]" :product="product"/>
    <div class="text-center flex flex-col items-center">
        <h4 class="text-lg font-medium text-gray-800 dark:text-gray-100">{{ product.name.toUpperCase() }}</h4>
        <p class="font-extralight text-gray-600 dark:text-gray-300 text-sm">{{ ProductUtils.getShortDescription(product) }}</p>
        <p class="font-light text-gray-800/95 dark:text-gray-200/95 mt-2">{{ ProductUtils.getLengthText(product.variants[0].size) }}</p>
        <ViewButton @click="productView()">
            <p class="text-gray-950 dark:text-gray-50 text-lg group-hover:text-white transition-all">From
                ${{ product.variants[0].price.value }}</p>
        </ViewButton>
    </div>
</ProductCard>
</template>

<style scoped>

</style>