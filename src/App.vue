<template>
    <div class="nav-bar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="">Sobre</router-link></li>
        <li><router-link to="/updates">Atualizações</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
</template>

<script setup>

</script>

<style>
  #app{

  }

  .nav-bar {
    @apply container max-w-none py-2
  }

  .nav-bar ul {
    @apply flex flex-row gap-4
  }
</style>
