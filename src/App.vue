<template>
  <div class="page">
    <LoginPage/>
  </div>
</template>

<script setup>

import LoginPage from '@/components/authentication/login/LoginPage.vue'

/*  comunicação com minha API LARAVEL PHP Funcionando perfeitamente

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },


  methods: {
    async api_laravel() {

       let request = await fetch('http://127.0.0.1:8000/api/auth/register',{
        method: 'POST',

        //JSON stringify é importante para transformar um objeto {} em uma string json
        body: JSON.stringify({
            name : "Maria almeida",
            email : "maria@fdsafsadfsda.com",
            password : "password"
        }),
        headers: {
          "Content-type" : "application/json", 
          'Accept' : 'application/json'
        }
       })

       const data = await request.json()

       console.log(data)
    }
  },

  mounted()
  {
    this.api_laravel()
  }
} */
</script>

<style>

</style>
