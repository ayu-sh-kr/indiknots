<script setup lang="ts">

import type {CartModal} from "~/modals/cart.modal";

const props = defineProps({
    item: {
        type: Object as PropType<CartModal>,
        required: true
    }
})

const count = ref(0)

onMounted(() => {
    count.value = props.item.count;
});

const increment = (item: CartModal) => {
    item.incrementCount()
    count.value = item.count;
}

const decrement = (item: CartModal) => {
    item.decrementCount();
    count.value = item.count
}

</script>

<template>
    <div class="flex gap-x-3 items-center justify-center">
        <UButton type="button" @click="decrement(item)" icon="i-carbon:subtract-filled"
                 color="orange" variant="soft"/>
        <span>{{ count }}</span>
        <UButton type="button" @click="increment(item)" icon="i-material-symbols:add-circle-rounded"
                 color="orange" variant="soft"/>
    </div>
</template>

<style scoped>

</style>