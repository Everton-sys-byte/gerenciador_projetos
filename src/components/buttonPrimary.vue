<template>
    <button class="btn-primary">{{ btnInfo }}</button>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps( {
        btnInfo : String
    })

</script>

<style scoped>

    .btn-primary {
        @apply bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-transparent text-white py-1 px-2 rounded-2xl w-full font-bold;
        transition: .2s ease-in;
    }

    .btn-primary:hover {
        @apply bg-gradient-to-r from-white to-white text-blue-600 border-2 border-blue-600
    }

</style>

