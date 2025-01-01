<script setup lang="ts">

const props = defineProps({
    placeholder: String,
    type: {
        type: String,
        required: true
    },
    message: String,
    isError: {
        type: Boolean,
        required: false,
        default: false
    },
    isSuccess: {
        type: Boolean,
        required: false,
        default: false
    },
    disable: {
        type: Boolean,
        required: false,
        default: false
    },
    modelValue: {
        type: [String, Number, Object] as PropType<string | number | object | undefined | null>,
        required: true
    },
});


const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};

const STYLE_CONFIG = {
    'default': 'focus:ring-orange-300 dark:focus:ring-orange-500',
    success: 'ring-4 ring-emerald-300 dark:ring-emerald-500',
    error: 'ring-4 ring-red-300 dark:focus:ring-red-500'
}

</script>

<template>
    <input
        :type="type"
        :placeholder="placeholder"
        class="text-lg text-gray-600 dark:text-gray-300 dark:bg-slate-600 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-4 py-2 px-3 w-full rounded-md"
        :class="`${isError ? STYLE_CONFIG.error : STYLE_CONFIG.default} ${isSuccess ? STYLE_CONFIG.success : STYLE_CONFIG.default}`"
        @input="updateValue"
        :disabled="disable"
        :value="modelValue"
    >
</template>

<style scoped>

</style>