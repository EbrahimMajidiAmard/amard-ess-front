<template>
    <select class="form-select form-select-sm" :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)">
        <option disabled value="0">{{ placeholder }}</option>
        <option v-for="(item, index) in options" :key="index" :value="item.value">
            {{ item.text }}
        </option>
    </select>
</template>

<!-- <script setup>
import { defineProps } from 'vue'
defineProps({
    modelValue: [String, Number],
    options: {
        type: Array,
        required: true
    },
    placeholder: {
        type: String,
        default: 'لطفا یک گزینه انتخاب کنید'
    }
})
</script> -->
<script setup>
/* global defineProps */
defineProps({
    modelValue: [String, Number],
    options: {
        type: Array,
        required: true
    },
    placeholder: {
        type: String,
        default: 'لطفا یک گزینه انتخاب کنید'
    }
})
</script>