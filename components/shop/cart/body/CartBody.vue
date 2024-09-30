<script setup lang="ts">

import {type CartModal, getDiscountedPrice, getTotalPrice} from "~/modals/cart.modal";
import {useCartStore} from "~/stores/cart.store";
import CartItem from "~/components/shop/cart/body/body/CartItem.vue";


const cart = ref<CartModal[]>([])
const cartStore = useCartStore()
const totalPrice = ref()
const discounted = ref()

onMounted(() => {
    cart.value = cartStore.cart
    totalPrice.value = getTotalPrice(cart.value as CartModal[])
    discounted.value = getDiscountedPrice(cart.value as CartModal[])
});

watch(() => cartStore.cart, (newProducts) => {
    cart.value = newProducts
    updateTotal();
    updateDiscounted();
});

const updateTotal = () => {
  totalPrice.value = roundedTo2(getTotalPrice(cart.value as CartModal[]));
}

const updateDiscounted = () => {
  discounted.value = roundedTo2(getDiscountedPrice(cart.value as CartModal[]))
}
</script>

<template>

    <section class="grid grid-cols-1 md:grid-cols-8 max-w-7xl mx-auto font-tahoma">
        <div class="col-span-6 space-y-5 p-2">
            <CartItem v-for="(item, index) in cart" :key="index" :item="item as CartModal" @update-total="updateTotal(); updateDiscounted()"/>
        </div>
        <div class="col-span-2 flex justify-center p-2 w-full">
            <div class="w-full bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl space-y-2 tracking-wide p-2 max-sm:text-sm">
                <h4 class="text-lg md:text-xl border-b py-2 px-3">Price Details</h4>
                <div class="flex justify-between items-center w-full py-1.5 px-3">
                    <h4>Price ( {{cart.length}} Items)</h4>
                    <h4>${{totalPrice}}</h4>
                </div>
                <div class="flex justify-between items-center w-full py-1.5 px-3">
                    <h4>Discount</h4>
                    <h4 class="text-orange-400 dark:text-orange-500">-${{roundedTo2(totalPrice - discounted)}}</h4>
                </div>
                <div class="flex justify-between items-center w-full py-1.5 px-3">
                    <h4>Platform Fee</h4>
                    <h4 class="text-orange-400 dark:text-orange-500">0</h4>
                </div>
                <div class="flex justify-between items-center w-full py-1.5 px-3">
                    <h4>Delivery Charges</h4>
                    <h4 class="text-orange-400 dark:text-orange-500">Free</h4>
                </div>
                <div class="flex justify-between items-center w-full py-2 px-3 text-lg md:text-xl font-semibold border-y-2 border-dashed">
                    <h4>Total Amount</h4>
                    <h4>${{discounted}}</h4>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>

</style>