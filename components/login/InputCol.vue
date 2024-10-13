<script setup lang="ts">

const props = defineProps({
    placeholder: String,
    type: {
        type: String,
        required: true
    },
    message: String,
    error: String as PropType<InputState>
});


const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};

const STYLE_CONFIG = {
    'default': 'focus:ring-orange-300 dark:focus:ring-orange-500',
    success: 'focus:ring-emerald-300 dark:focus:ring-emerald-500',
    error: 'focus:ring-red-300 dark:focus:ring-red-500'
}

const processState = () => {
    switch (props.error) {
        case "DEFAULT" :
            return STYLE_CONFIG.default;
        case "SUCCESS":
            return STYLE_CONFIG.success;
        case "ERROR":
            return STYLE_CONFIG.error;
    }
}

</script>

<template>
    <input
        :type="type"
        :placeholder="placeholder"
        class="text-lg md:text-xl dark:bg-slate-600 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-4 py-2 px-3 w-full rounded-md"
        :class="`${processState()}`"
        @input="updateValue"
    >
</template>

<style scoped>

</style>