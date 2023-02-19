<template>
  <div class="login-wrapper">
    <span role="button" class="login-title" @click="showForm()"
      >Efetuar login</span
    >
    <form-container />
  </div>
</template>


<script setup>
import {ref} from 'vue'
import formContainer from "@/components/form.vue";

const isVisible = ref(false);

const showForm = () => {
  isVisible.value = true;
};
</script>

<style setup>
</style>