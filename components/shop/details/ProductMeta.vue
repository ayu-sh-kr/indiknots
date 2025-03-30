<script setup lang="ts">

import ContentWrapper from "~/components/shop/details/ContentWrapper.vue";
import SizeView from "~/components/shop/details/SizeView.vue";
import {useCartStore} from "~/stores/cart.store";
import {type ProductModal} from "~/domains/product/product.modal";
import {CartItemModal} from "~/domains/cart/cart-item.modal";
import type {ProductVariantModal} from "~/domains/product/variant/product-variant.modal";
import {ProductUtils} from "~/domains/product/product.utils";
import {CartUtils} from "~/domains/cart/cart.utils";

const props = defineProps({
    product: {
        type: Object as PropType<ProductModal>,
        required: true
    }
});

const selectedVariant = ref<ProductVariantModal>()

onMounted(() => {
    console.log(props.product)
    selectedVariant.value = props.product.variants[0];
});

const cartStore = useCartStore();

const cartActionButton = () => {
    if(cartStore.isProductExist(props.product.id)) {
        return 'Remove from Cart'
    } else {
        return 'Add to Cart'
    }
}

const addedToCart = ref<boolean>(false)

const addToCart = async () => {
    const product = props.product;
    const cartModal = CartItemModal.builder()
        .product(product)
        .productId(product.id)
        .quantity(1)
        .variant(selectedVariant.value ?? product.variants[0])
        .build()

    addedToCart.value = await CartUtils.cartAction3Handler(cartModal, useCartService())
}


</script>

<template>
    <div v-if="selectedVariant" class="flex flex-col items-center gap-y-3 w-full sticky top-10">
        <ContentWrapper class="w-2/3">
            <h3 class="pb-4 border-b border-gray-600 dark:border-gray-200 w-full text-left">{{product.name}}</h3>
        </ContentWrapper>

        <ContentWrapper class="flex gap-x-3 sm:gap-x-5 gap-y-3 flex-wrap">
            <UBadge variant="soft">{{ product.getMaterialText() }}</UBadge>
            <UBadge variant="soft">{{product.getCategoryText()}}</UBadge>
            <UBadge variant="soft">{{product.getTechniqueText()}}</UBadge>
        </ContentWrapper>

        <ContentWrapper>
            <span v-if="selectedVariant" class="font-medium text-lg tracking-wide text-gray-700 dark:text-gray-300">{{ ProductUtils.getPrizeText(selectedVariant) }}</span>
        </ContentWrapper>

        <ContentWrapper class="w-2/3 text-gray-900 dark:text-gray-100 font-semibold text-sm flex justify-start gap-x-5" v-if="selectedVariant">
            <p>
                Size: {{ProductUtils.getSizeText(selectedVariant)}}
            </p>

            <p :class="{'line-through text-gray-600 dark:text-gray-300' : selectedVariant.stock.quantity === 0}">
                Quantity: {{ selectedVariant.stock.quantity }}
            </p>
        </ContentWrapper>

        <ContentWrapper class="grid grid-cols-2 md:grid-cols-3 w-2/3 gap-x-5 gap-y-3">
            <SizeView @click="() => {
                selectedVariant = variants;
            }" v-for="variants in product.variants" :variant="variants" :selected="selectedVariant === variants"/>
        </ContentWrapper>

        <div v-if="selectedVariant.stock.status === 'AVAILABLE'" class="meta-div">
            <button class="meta-action bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600">
                <UIcon name="i-icon-park-outline:buy" class="text-lg font-semibold"/>
                <span>Buy Now</span>
            </button>
            <button @click="addToCart" class="meta-action bg-orange-400 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600">
                <UIcon dynamic :name="!addedToCart ? 'i-material-symbols:add-shopping-cart-outline-rounded' : 'i-material-symbols:shopping-cart-off-outline'" class="text-lg font-semibold"/>
                <span>{{ cartActionButton() }}</span>
            </button>
        </div>

        <ContentWrapper v-else class="mt-3">
            <button class="flex justify-center items-center gap-x-5 bg-gray-200 dark:bg-gray-800 w-full py-1.5 rounded-lg" disabled>
                <UIcon name="ep:sold-out" class="text-lg font-semibold"/>
                <span>Sold Out</span>
            </button>
        </ContentWrapper>

        <ContentWrapper class="mt-3">
            <UAccordion :items="[{label: 'Description', content: product.description}]" color="gray" variant="ghost" />
        </ContentWrapper>
    </div>
</template>

<style scoped>
.meta-action {
    @apply w-full py-2 px-3 text-center transition-all text-white rounded-lg shadow-lg z-10 flex gap-x-3 justify-center items-center active:scale-95;
}

.meta-div {
    @apply max-md:space-y-2 max-md:flex max-md:flex-col max-md:items-center md:grid grid-cols-2 md:place-items-center mt-5 w-full md:w-2/3 gap-x-5 transition-all;
}
</style>