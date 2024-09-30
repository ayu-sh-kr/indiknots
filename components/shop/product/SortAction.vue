<script setup lang="ts">
import MetaAction from "~/components/shop/details/MetaAction.vue";

const props = defineProps({
    icon: {
        type: String,
        required: false
    },

    text: {
        type: String,
        required: true
    },

    disabled: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['sort-action']);

const updateSort = (sort: ProductSort) => {
    console.log('Starting Sort')
    emit("sort-action", sort)
}

const sorts: SortMeta[] = [
    {
        name: 'Sort Alphabetically',
        action: () => updateSort("Alphabetical")
    },

    {
        name: 'Reverse Alphabetically',
        action: () => updateSort("Alphabetical-Reverse")
    },

    {
        name: 'High to Low (Price)',
        action: () => updateSort("Price - High to Low")
    },

    {
        name: 'Low to High (Price)',
        action: () => updateSort("Price - Low to High")
    },

    {
        name: 'Sort By Stock',
        action: () => updateSort("Stock")
    },
];

type SortMeta = {
    name: string,
    action: Function
}

</script>

<template>
    <UPopover :disabled="disabled">
        <MetaAction :text="text" :icon="icon" :action="!disabled"/>

        <template #panel>
            <div class="flex flex-col w-56 gap-x-1.5 py-2">
                <button v-for="item in sorts" @click="item.action()"
                        class="transition-all py-2 px-3 flex justify-start gap-x-3 items-center cursor-pointer dark:hover:bg-gray-800
                        hover:bg-gray-50 text-slate-900 hover:text-orange-400 dark:text-gray-100 dark:hover:text-orange-400">
                    {{item.name}}
                </button>
            </div>
        </template>
    </UPopover>
</template>

<style scoped>

</style>