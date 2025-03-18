<script setup lang="ts">

import {type CartModal} from "~/domains/cart/cart.modal";
import {useCartStore} from "~/stores/cart.store";
import CartItem from "~/components/shop/cart/CartItem.vue";
import CartDescription from "~/components/shop/cart/CartDescription.vue";
import {CartUtils} from "~/domains/cart/cart.utils";


const cart = ref<CartModal[]>([])
const cartStore = useCartStore()
const totalPrice = ref(0)
const discounted = ref(0)

onMounted(() => {
    cart.value = cartStore.cart
    totalPrice.value = CartUtils.getTotalPrice(cart.value as CartModal[])
    discounted.value = CartUtils.getDiscountedPrice(cart.value as CartModal[])
});

watch(() => cartStore.cart, (newProducts) => {
    cart.value = newProducts
    updateTotal();
    updateDiscounted();
});

const updateTotal = () => {
  totalPrice.value = roundedTo2(CartUtils.getTotalPrice(cart.value as CartModal[]));
}

const updateDiscounted = () => {
  discounted.value = roundedTo2(CartUtils.getDiscountedPrice(cart.value as CartModal[]))
}
</script>

<template>

    <section class="grid grid-cols-1 md:grid-cols-8 max-w-7xl mx-auto font-tahoma">
        <div class="col-span-6 space-y-5 p-2">
            <CartItem v-for="(item, index) in cart" :key="index" :item="item as CartModal" @update-total="updateTotal(); updateDiscounted()"/>
        </div>
        <div class="col-span-2 flex justify-center p-2 w-full">
            <CartDescription :discounted="discounted" :total="totalPrice" :length="cart.length"/>
        </div>
    </section>

</template>

<style scoped>

</style>