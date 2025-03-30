<script setup lang="ts">
import {useCartStore} from "~/stores/cart.store";
import CartPreview from "~/components/shop/cart/header/CartPreview.vue";
import type {CartItemModal} from "~/domains/cart/cart-item.modal";

const cartStore = useCartStore();

const products = ref<CartItemModal[]>([])

onMounted(() => {
    products.value = cartStore.cart;
})

watch(() => cartStore.cart, (newProducts) => {
    products.value = newProducts
});

</script>

<template>
    <UPopover mode="hover">
        <UChip v-if="cartStore.getCartSize() > 0" :text="cartStore.getCartSize()" size="2xl">
            <UButton to="/shop/cart" icon="i-material-symbols-light:shopping-cart-rounded" variant="ghost"/>
        </UChip>

        <UButton v-else to="/shop/cart" icon="i-material-symbols-light:shopping-cart-rounded" variant="ghost"/>

        <template #panel>
            <div v-for="(product, index) in products" :key="index">
                <CartPreview :product="product.product" />
            </div>
        </template>
    </UPopover>
</template>

<style scoped>

</style>