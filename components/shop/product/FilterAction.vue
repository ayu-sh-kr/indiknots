<script setup lang="ts">

import RangeUI from "~/components/utils/RangeUI.vue";
import {processUnderscoreText} from "~/modals/product.modal";

const categoryOptions: ProductCategory[] = [
    "TRADITIONAL", "MODERN", "ABSTRACT", "GEOMETRIC", "FLORAL", "UNSHAPED", "DHURRIES", "PLAYROOM", "DESIGNER", "CUSHION&PILLOW", "ACCESSORIES"
]
const categories = ref([]);

const techniqueOptions: ProductTechnique[] = [
    "HAND_KNOTTED", "HAND_TUFTED", "HAND_LOOMED", "FLAT_WEAVE", "PATCH_WORK", "SHAGGY", "OTHER"
]
const techniques = ref([]);

const materialOptions: ProductMaterial[] = [
    "WOOL", "VISCOSE", "SILK", "JUTE", "PET", "BOMBOO_SILK", "TENCIL", "OTHER"
]
const materials = ref([])

const emit = defineEmits(['filer-action']);

const emitFilteredData = () => {
    const data: ProductFilter = {
        technique: techniques.value,
        material: materials.value,
        category: categories.value,
        priceH2L: 0,
        priceL2H: 0
    }
    emit("filer-action", data)
}

</script>

<template>
<div class="p-2 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3 text-gray-800 dark:text-gray-200 bg-slate-100 dark:bg-slate-900 py-4 rounded-xl">

    <USelectMenu v-model="categories" :options="categoryOptions" multiple placeholder="Choose Category">
        <template #label>
            <span v-if="categories.length" class="truncate">{{ categories.join(', ') }}</span>
            <span v-else>Choose Category</span>
        </template>
    </USelectMenu>

    <USelectMenu v-model="techniques" :options="techniqueOptions" multiple placeholder="Choose Technique">
        <template #label>
            <span v-if="techniques.length" class="truncate">{{ techniques.map(value => processUnderscoreText(value)).join(', ') }}</span>
            <span v-else>Choose Techniques</span>
        </template>
        <template #option="{option: technique}">
            <span class="truncate">{{processUnderscoreText(technique)}}</span>
        </template>
    </USelectMenu>

    <USelectMenu v-model="materials" :options="materialOptions" multiple placeholder="Choose Material">
        <template #label>
            <span v-if="materials.length" class="truncate">{{ materials.map(value => processUnderscoreText(value)).join(', ') }}</span>
            <span v-else>Choose Materials</span>
        </template>
        <template #option="{option: material}">
            <span class="truncate">{{processUnderscoreText(material)}}</span>
        </template>
    </USelectMenu>

    <UPopover>
        <UButton color="gray" class="w-full flex items-center justify-center">Low to High (Price)</UButton>
        <template #panel>
            <div class="w-56 p-2">
                <RangeUI :max="10000" :min="0" />
            </div>
        </template>
    </UPopover>
    <UPopover>
        <UButton color="gray" class="w-full flex items-center justify-center">High to Low (Price)</UButton>
        <template #panel>
            <div class="w-56 p-2">
                <RangeUI :max="10000" :min="0" />
            </div>
        </template>
    </UPopover>

    <UButton type="button" @click="emitFilteredData()" class="flex justify-center active:scale-95 transition-all">
        Apply
    </UButton>
</div>
</template>

<style scoped>

</style>