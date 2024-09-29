<script setup lang="ts">

import ContentWrapper from "~/components/shop/details/ContentWrapper.vue";
import SizeView from "~/components/shop/details/SizeView.vue";
import {useCartStore} from "~/stores/cart.store";
import {getPrizeText, type ProductModal} from "~/modals/product.modal";
import {cartAction2Handler, CartModalBuilder} from "~/modals/cart.modal";

const props = defineProps({
    product: {
        type: Object as PropType<ProductModal>,
        required: true
    }
});

const selected = ref<ProductSize>()

onMounted(() => {
    selected.value = props.product.prices[0].size;
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

const addToCart = () => {
    const product = props.product;
    const builder = new CartModalBuilder()
    const cartModal = builder.product(product)
        .productId(product.id)
        .color(product.color)
        .quantity(1)
        .price(product.getPrizeBySize(selected.value ?? product.prices[0].size) ?? product.prices[0])
        .size(selected.value ?? product.prices[0].size)
        .build()

    addedToCart.value = cartAction2Handler(cartModal, useCartStore)
}


</script>

<template>
    <div class="flex flex-col items-center gap-y-3 w-full sticky top-10">
        <ContentWrapper class="w-2/3">
            <h3 class="pb-4 border-b border-gray-600 dark:border-gray-200 w-full text-left">{{product.name}}</h3>
        </ContentWrapper>

        <ContentWrapper class="flex gap-x-3 sm:gap-x-5 gap-y-3 flex-wrap">
            <UBadge variant="soft">{{ product.getMaterialText() }}</UBadge>
            <UBadge variant="soft">{{product.getCategoryText()}}</UBadge>
            <UBadge variant="soft">{{product.getTechniqueText()}}</UBadge>
        </ContentWrapper>

        <ContentWrapper>
            <span v-if="selected" class="font-medium text-lg tracking-wide text-gray-700 dark:text-gray-300">{{ getPrizeText(product, selected) }}</span>
        </ContentWrapper>

        <ContentWrapper class="w-2/3 text-gray-900 dark:text-gray-100 font-semibold text-sm" v-if="selected">
            Size: {{selected.length}} x {{selected.width}} {{selected.unit}}
        </ContentWrapper>

        <ContentWrapper class="grid grid-cols-2 md:grid-cols-3 w-2/3 gap-x-5 gap-y-3">
            <SizeView @click="() => {
                selected = price.size
            }" v-for="price in product.prices" :size="price.size" :selected="selected === price.size"/>
        </ContentWrapper>

        <div v-if="product.stock === 'AVAILABLE'" class="meta-div">
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