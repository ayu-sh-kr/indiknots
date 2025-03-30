<script setup lang="ts">

import type {CartItemModal} from "~/domains/cart/cart-item.modal";

const props = defineProps({
    item: {
        type: Object as PropType<CartItemModal>,
        required: true
    }
})

const count = ref(0)

onMounted(() => {
    count.value = props.item.quantity;
});

const emit = defineEmits(['update-quantity'])

const increment = (item: CartItemModal) => {
    item.incrementCount()
    count.value = item.quantity;
    emit("update-quantity", item.quantity)
}

const decrement = (item: CartItemModal) => {
    item.decrementCount();
    count.value = item.quantity
    emit("update-quantity", item.quantity)
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