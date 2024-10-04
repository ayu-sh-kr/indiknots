<script setup lang="ts">

const props = defineProps({
    min: {
        type: Number,
        required: true
    },
    max: {
        type: Number,
        required: true
    }
});

const current = ref<number>(0);

const emit = defineEmits(['range-change'])

watch((current), (value) => {
    emit("range-change", value);
})

</script>

<template>
<div class="flex flex-col items-center text-sm">
    <div class="flex justify-between items-center w-full">
        <p>${{min}}</p>
        ${{current}}
        <p>${{max}}</p>
    </div>
    <URange :step="50" :min="min" :max="max" v-model="current"/>
</div>
</template>

<style scoped>

</style>