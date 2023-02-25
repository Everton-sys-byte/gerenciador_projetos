<template>
  <div class="login-wrapper">
    <span role="button" class="login-title" @click="showForm()">Efetuar login</span>
    <div class="form-wrapper" :class="{'invisible' : !isVisible }">
      <button role="close" class="close-btn" @click="formClose()">&#10006</button> 
      <formContainer>
        <form-group name="email" type="email" placeholder="preencha o seu email"/>
        <form-group name="password" type="password" placeholder="preencha sua senha"/>
        <input type="submit" class="btn btn-primary" value="Logar" role="button">
      </formContainer>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue'
import formContainer from '@/components/forms/form.vue'
import formGroup from "@/components/forms/formGroup.vue";

const isVisible = ref(false)

const showForm = () => {
  isVisible.value = true;
};

const formClose = () => {
  isVisible.value = false
}

</script>

<style setup>
.form-wrapper {
  @apply absolute p-2 bg-white rounded;
  width: 250px;
  transform: translateX(-100%);
}

.form-wrapper .close-btn {
  @apply py-1;
}

.login-title {
  @apply text-white
}

.invisible {
  @apply hidden
}

.btn {
  @apply w-full border-2 border-blue-500 rounded
}
</style>