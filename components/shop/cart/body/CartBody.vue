<script setup lang="ts">

import type {CartModal} from "~/modals/cart.modal";
import {useCartStore} from "~/stores/cart.store";
import ItemCount from "~/components/shop/cart/body/body/ItemCount.vue";


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

    <section class="grid grid-cols-8 max-w-7xl mx-auto place-items-center">
        <div class="col-span-6 space-y-5 p-2">
            <div v-for="(item, index) in cart" :key="index"
                 class="grid grid-cols-5 bg-white shadow-xl dark:bg-slate-800 p-6 rounded-xl"
            >
                <div class="col-span-1 w-2/3 space-y-2">
                    <ItemCount :item="item"/>
                </div>
                <div class="col-span-3">
                    <h3>{{item.product.name}}</h3>
                    <div class="flex justify-start gap-x-5 text-sm">
                        <p>{{item.product.getCategoryText()}}</p>
                        <p>{{item.product.getMaterialText()}}</p>
                        <p>{{item.product.getTechniqueText()}}</p>
                        <p>{{item.product.getSizeText(item.size)}}</p>
                    </div>
                </div>
                <div class="col-span-1">

                </div>
            </div>
        </div>
        <div class="col-span-2">

        </div>
    </section>

</template>

<style scoped>

</style>