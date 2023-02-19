<template>
    <section>

    </section>
</template>

<style>
    .banner {
        @apply container max-w-none;
        height: 400px;
        background-size: cover;
        background-position: center;
    }
</style>


<script setup>
    import {defineProps} from 'vue'

    defineProps({
        image: String,   
    })
</script>