<script setup lang="ts">


import NoContent from "~/components/utils/NoContent.vue";
import SizeView from "~/components/shop/details/SizeView.vue";
import ContentWrapper from "~/components/shop/details/ContentWrapper.vue";

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true
    }
});

const selected = ref<ProductSize>()

onMounted(() => {
    selected.value = props.product.price[0].size;
});

const calculatePrice = () => {
    const prices = props.product.price.filter(price => price.size === selected.value);

    if(prices[0]) {
        console.log(prices[0]);
    }

    return prices[0] ? `USD. ${prices[0].price}` : 'Price not found';
}

</script>

<template>
<div v-if="product" class="relative grid grid-cols-1 md:grid-cols-2 mt-10 tracking-wider place-items-start gap-y-10 px-5">
    <div class="flex flex-col items-center gap-y-3 w-full overflow-scroll">
        <img :src="product.img" :alt="product.name" class="w-[460px]">
    </div>
    <div class="flex flex-col items-center gap-y-3 w-full sticky top-10">
        <ContentWrapper class="w-2/3">
            <h3 class="pb-4 border-b border-gray-600 dark:border-gray-200 w-full text-left">{{product.name}}</h3>
        </ContentWrapper>

        <ContentWrapper class="flex gap-x-3 sm:gap-x-5 gap-y-3 flex-wrap">
            <UBadge variant="soft">{{product.material}}</UBadge>
            <UBadge variant="soft">{{product.category}}</UBadge>
            <UBadge variant="soft">{{product.technique.split("_").join(" ")}}</UBadge>
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
            <button class="w-full py-2 px-3 text-center transition-all bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white rounded-lg shadow-lg z-10 flex gap-x-3 justify-center items-center">
                <UIcon name="i-icon-park-outline:buy" class="text-lg font-semibold"/>
                <span>Buy Now</span>
            </button>
            <button class="w-full py-2 px-3 text-center transition-all bg-orange-400 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600 text-white rounded-lg shadow-lg z-10 flex gap-x-3 justify-center items-center">
                <UIcon name="i-material-symbols:add-shopping-cart-outline-rounded" class="text-lg font-semibold"/>
                <span>Add to Cart</span>
            </button>
        </div>

        <ContentWrapper class="mt-3">
            <UAccordion :items="[{label: 'Description', content: product.description}]" color="gray" variant="ghost" />
        </ContentWrapper>
    </div>
</div>
<NoContent v-else />
</template>

<style scoped>

</style>