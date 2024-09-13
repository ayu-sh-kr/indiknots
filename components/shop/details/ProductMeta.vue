<script setup lang="ts">

import ContentWrapper from "~/components/shop/details/ContentWrapper.vue";
import SizeView from "~/components/shop/details/SizeView.vue";
import {useCartStore} from "~/stores/cart.store";
import type {ProductModal} from "~/modals/product.modal";

const props = defineProps({
    product: {
        type: Object as PropType<ProductModal>,
        required: true
    }
});

const selected = ref<ProductSize>()

onMounted(() => {
    selected.value = props.product.price[0].size;
});

const calculatePrice = () => {

    if(selected.value) {
        const price = props.product.getPrizeBySize(selected.value)
        return price ? `USD. ${price.price}` : 'Price not found';
    }
}

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
    if(!cartStore.isProductExist(props.product.id)) {
        cartStore.addToCart(props.product)
        addedToCart.value = true;
    } else {
        cartStore.removeFromCart(props.product.id)
        addedToCart.value = false;
    }
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
            <span class="font-medium text-lg tracking-wide text-gray-700 dark:text-gray-300">{{calculatePrice()}}</span>
        </ContentWrapper>

        <ContentWrapper class="w-2/3 text-gray-900 dark:text-gray-100 font-semibold text-sm" v-if="selected">
            Size: {{selected.length}} x {{selected.width}} {{selected.unit}}
        </ContentWrapper>

        <ContentWrapper class="grid grid-cols-2 md:grid-cols-3 w-2/3 gap-x-5 gap-y-3">
            <SizeView @click="() => {
                selected = price.size
            }" v-for="price in product.price" :size="price.size" :selected="selected === price.size"/>
        </ContentWrapper>

        <div class="max-md:space-y-2 flex-col md:grid grid-cols-2 md:place-items-center items-center mt-5 w-full md:w-2/3 gap-x-5 transition-all">
            <button class="meta-action bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600">
                <UIcon name="i-icon-park-outline:buy" class="text-lg font-semibold"/>
                <span>Buy Now</span>
            </button>
            <button @click="addToCart" class="meta-action bg-orange-400 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600">
                <UIcon dynamic :name="!addedToCart ? 'i-material-symbols:add-shopping-cart-outline-rounded' : 'i-material-symbols:shopping-cart-off-outline'" class="text-lg font-semibold"/>
                <span>{{ cartActionButton() }}</span>
            </button>
        </div>

        <ContentWrapper class="mt-3">
            <UAccordion :items="[{label: 'Description', content: product.description}]" color="gray" variant="ghost" />
        </ContentWrapper>
    </div>
</template>

<style scoped>
.meta-action {
    @apply w-full py-2 px-3 text-center transition-all text-white rounded-lg shadow-lg z-10 flex gap-x-3 justify-center items-center active:scale-95;
}
</style>