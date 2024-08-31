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
    'default': 'focus:ring-orange-200',
    success: 'focus:ring-emerald-200',
    error: 'focus:ring-red-200'
}

const processState = () => {
    switch (props.error) {
        case "DEFAULT" : return STYLE_CONFIG.default;
        case "SUCCESS": return STYLE_CONFIG.success;
        case "ERROR": return STYLE_CONFIG.error;
    }
}

</script>

<template>
    <div class="w-full">
        <input
            :type="type"
            :placeholder="placeholder" class="text-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-orange-200 p-3 w-full h-full rounded-md"
            :class="`${processState()}`"
            @input="updateValue"
        >
    </div>
</template>

<style scoped>

</style>