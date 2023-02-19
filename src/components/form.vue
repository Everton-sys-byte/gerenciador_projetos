<template>
<div class="form-wrapper" :class="{ invisible: !isVisible }">
    <button role="close" class="close-btn" @click="closeForm()">&#10006</button> 
    <form action="#">
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="senha" />
      <input type="submit" value="Logar" class="btn" role="button" />
    </form>
</div>
</template>

<script setup>
import { ref } from "vue";

const closeForm = () => {
  isVisible.value = false;
};
</script>

<style setup>
.form-wrapper {
  @apply absolute p-2 bg-white rounded;
  transform: translateX(-100%);
}

.form-wrapper form {
  @apply flex flex-col gap-2;
}

form input {
  @apply py-1 px-2 border-2 border-black rounded bg-transparent;
}

.form-wrapper .close-btn {
  @apply text-right py-1;
}

.btn {
  @apply p-1 rounded w-full border-2 border-blue-600;
}

.invisible {
  @apply hidden;
}
</style>