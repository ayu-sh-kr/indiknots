<script setup lang="ts">

import type {CartItemModal} from "~/domains/cart/cart-item.modal";
import ItemCount from "~/components/shop/cart/util/ItemCount.vue";
import InfoText from "~/components/shop/cart/util/InfoText.vue";
import {roundedTo2} from "~/utils/GeneralUtils";
import {useAccountStore} from "~/stores/account.store";
import {ProductUtils} from "~/domains/product/product.utils";
import {CartUtils} from "~/domains/cart/cart.utils";
import {useCartService} from "~/composables/useCartService";
import {useOrderService} from "~/composables/useOrderService";

const props = defineProps({
    item: {
        type: Object as PropType<CartItemModal>,
        required: true
    }
});

const selectedVariant = ref();
const selectedSize = ref();
const quantity = ref(1)

const emit = defineEmits(['update-total']);

onMounted(() => {
    selectedSize.value = props.item.selectedSize();
    selectedVariant.value = props.item.variant;
    quantity.value = props.item.quantity
})

watch((selectedSize), (value: ProductSizeOption) => {

    const variant = ProductUtils.getVariantFromSizeOption(
      props.item.product.variants, value
    );

    if (variant) {
        props.item.updateVariant(variant);

        quantity.value = 1;
    }

    emit("update-total");
});

const updatedQuantity = (value: number) => {
    quantity.value = value
    emit("update-total")
}

const removeFromCart = async () => {
    await CartUtils.cartAction3Handler(props.item, useCartService())
}

const orderService = useOrderService();
const addressStore = useAccountStore();
const buyThisNow = async () => {
    await orderService.createOrder({
        items: [
            {
                orderId: -1,
                productId: props.item.product.id,
                variantId: props.item.variant.id,
                quantity: quantity.value,
            }
        ],
        addressId: addressStore.addresses[0].id,
    });
}

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-5 bg-white shadow-xl dark:bg-slate-800 px-4 py-3 rounded-xl max-md:gap-y-3">
        <div class="col-span-1 w-full flex flex-col md:justify-around max-md:justify-center items-center">
            <div class="object-contain overflow-hidden w-2/3 md:h-2/3">
                <img :src="item.variant.images[0].url" :alt="item.product.name" class="w-full">
            </div>
            <ItemCount :item="item" @update-quantity="updatedQuantity"/>
        </div>
        <div class="col-span-4 flex flex-col gap-y-2">
            <h3>{{item.product.name}}</h3>
            <div class="flex justify-start max-md:items-center gap-x-3 text-sm w-full flex-wrap">
                <InfoText :details="item.product.getCategoryText()" heading="Category" size="sm"/>
                <InfoText :details="item.product.getMaterialText()" heading="Material" size="sm"/>
                <InfoText :details="item.product.getTechniqueText()" heading="Technique" size="sm"/>
                <InfoText :details="ProductUtils.getSizeText(item.variant)" heading="Size" size="sm"/>
            </div>
            <InfoText details="Indiknots" heading="Seller" size="sm"/>
            <div class="flex items-baseline gap-x-3 flex-wrap">
                <span class="text-gray-600 dark:text-gray-300 line-through">${{ roundedTo2(item.variant.price.value * quantity) }}</span>
                <span class="text-gray-700 dark:text-gray-200 text-lg md:text-xl font-semibold">${{roundedTo2(ProductUtils.getDiscountedPrice(item.variant) * quantity)}}</span>
                <span class="text-orange-400 dark:text-orange-500 text-sm">{{item.variant.price.salesPercentage}}% OFF</span>
                <span class="text-xs text-orange-400 dark:text-orange-500">DISCOUNT APPLIED</span>
            </div>
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div class="w">
                    <USelectMenu placeholder="Select Size" v-model="selectedSize" :options="ProductUtils.getSizeOptions(item.product.variants)" />
                </div>
            </div>
            <div class="flex justify-end items-center gap-x-5 w-full text-sm sm:text-base">
                <button @click="removeFromCart()" class="bg-rose-400 dark:bg-rose-500 cart-action-button">
                    <span>Remove From Cart</span>
                </button>
                <button @click="buyThisNow" v-if="item.variant.stock.status === 'AVAILABLE'" class="bg-orange-400 dark:bg-orange-500 cart-action-button">
                    <span>Buy This Now</span>
                </button>
                <button v-else class="bg-brown-400 dark:bg-brown-500 cart-action-button">
                    <span>Sold Out</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.cart-action-button {
    @apply px-3 py-1 text-white rounded-lg active:scale-95 transition-all;
}

</style>