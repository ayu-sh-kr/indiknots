<script setup lang="ts">

import type {ProductVariantModal} from "~/domains/variant/product-variant.modal";
import type {ProductSizeModal} from "~/domains/size/product-size.modal";

defineProps({
    variant: {
        type: Object as PropType<ProductVariantModal>,
        required: true
    },

    selected: {
        type: Boolean,
        required: true
    }
});

const processProductLength = (size: ProductSizeModal) => {

    if(size.width === 0) {
        return `Rounded ${size.length} ${size.sizeUnit}`
    }

    return `${size.length} x ${size.width} ${size.sizeUnit}`
}

</script>

<template>
    <div  class="px-2 py-1 text-center cursor-pointer"
          :class="`${selected ? 'bg-orange-400 dark:bg-orange-500 text-gray-50': 'border border-gray-600 dark:border-gray-200 text-gray-800  dark:text-gray-200'}`"
    >
        {{processProductLength(variant.size)}}
    </div>
</template>

<style scoped>

</style>