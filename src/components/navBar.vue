<template>
    <div class="nav-bar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="">Sobre</router-link></li>
      <li><router-link to="/updates">Atualizações</router-link></li>
    </ul>

    <login-wrapper/>
  </div>
</template>

<script setup>
    import loginWrapper from '@/components/loginWrapper.vue'
</script>


<style scoped>
  .nav-bar {
    @apply container max-w-none py-5 px-32 absolute flex flex-row justify-between items-center
  }

  .nav-bar ul {
    @apply flex flex-row gap-4
  }

  .nav-bar ul li {
    @apply text-lg;
    color: white
  }
</style>