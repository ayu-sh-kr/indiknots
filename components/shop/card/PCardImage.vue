<script setup lang="ts">

import TagButton from "~/components/shop/card/TagButton.vue";
import type {ProductImageModal} from "~/domains/product/image/product-image.modal";

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: false
    },
    image: {
        type: Object as PropType<ProductImageModal>,
        required: true
    }
});

const emit = defineEmits(['add-cart'])

const addToCart = () => {
    emit("add-cart");
}

</script>

<template>
    <div class="p-image relative w-[280px] h-96 overflow-hidden bg-transparent">
        <div class="tag h-full absolute right-0 flex flex-col gap-y-5 items-center p-2">
            <UTooltip text="Add To Cart">
                <TagButton @click="addToCart" icon="material-symbols-light:shopping-cart-rounded"/>
            </UTooltip>
            <UTooltip text="Add To Favourite">
                <TagButton icon="material-symbols-light:favorite"/>
            </UTooltip>
        </div>
        <img :src="image.url" :alt="product?.name || 'Product image'" class="w-full h-full">
    </div>
</template>

<style scoped>

.tag {
    transition-duration: .4s;
    opacity: 0;
    transform: translateX(100%);
}

.p-image:hover > .tag {
    transition-duration: .4s;
    opacity: 1;
    transform: translateX(0);
}

</style>