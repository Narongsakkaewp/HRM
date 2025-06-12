<template>
    <div>
        <span class="font-semibold text-gray-800">{{ label }}:</span>
        <p v-if="!isHtml" class="mt-1 text-gray-600">{{ value }}</p>
        <p v-else class="mt-1 text-gray-600" v-html="value"></p>
    </div>
</template>

<script>
export default {
    name: 'InfoRow',
    props: {
        label: String,
        value: String,
        isHtml: {
            type: Boolean,
            default: false
        }
    }
}
</script>