<script setup lang="ts">

import type {CartModal} from "~/modals/cart.modal";
import {useCartStore} from "~/stores/cart.store";
import ItemCount from "~/components/shop/cart/body/body/ItemCount.vue";
import InfoText from "~/components/shop/cart/body/body/InfoText.vue";
import CartItem from "~/components/shop/cart/body/body/CartItem.vue";


const cart = ref<CartModal[]>([])
const cartStore = useCartStore()

onMounted(() => {
    cart.value = cartStore.cart
});

watch(() => cartStore.cart, (newProducts) => {
    cart.value = newProducts
});
</script>

<template>

    <section class="grid md:grid-cols-8 max-w-7xl mx-auto place-items-center">
        <div class="col-span-6 space-y-5 p-2">
            <CartItem v-for="(item, index) in cart" :key="index" :item="item"/>
        </div>
        <div class="col-span-2">

        </div>
    </section>

</template>

<style scoped>

</style>