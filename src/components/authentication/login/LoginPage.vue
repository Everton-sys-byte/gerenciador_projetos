<template>
    <div class="login-wrapper">
        <form @submit.prevent>
            <header>Efetuar login</header>
            <div class="form-input-group">
                <input type="text" v-model="formData.email" placeholder="Email">
            </div>
            <div class="form-input-group">
                <input :type="passwordFieldType" v-model="formData.password" placeholder="Senha">
            </div>
            <div class="from-check-group">
                <input type="checkbox" name="showPassword" id="showPassword" @click="showPassword()">
                Mostrar senha
            </div>
            <btnInfo btnInfo="Logar" @click="efetuarLogin()"/>
            <p>Não tem conta?&nbsp;<a href="">Inscreva-se</a></p>
            <div v-show="listOfErrors.length > 0" class="listOfErrors">
                <ul>
                    <li v-for="error in listOfErrors" :key="error.index">
                        {{ error }}
                    </li>
                </ul>
            </div>
        </form>
    </div>
</template>


<script setup>
    import btnInfo from '@/components/default/buttonPrimary.vue'
    import {ref, reactive} from 'vue'

    //usar o reactive quando se tratando de objetos
    const formData = reactive({
        email: "",
        password: ""
    })

    //lista de erros ao acessar a api
    let listOfErrors = ref([])

    //input password type
    let passwordFieldType = ref('password')
    const showPassword = () => {
                                  //operador ternário
        passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password"
    }

    const efetuarLogin = async () => {

        listOfErrors.value.length = 0

        const request = await fetch("http://127.0.0.1:8000/api/auth/login", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Accept" : "application/json",
                //avisar que o conteudo que estou passando é um json
                "Content-type" : "application/json"
            }
        }).catch(errors => {
            listOfErrors.value.push(errors)
        })

        if(request.status == 401)
            listOfErrors.value.push("usuario ou senha inválidos")
    }
</script>

<style scoped>
    .login-wrapper {
        @apply container flex flex-col justify-center items-center mx-auto min-w-full min-h-screen bg-slate-400 
    }

    .login-wrapper > form {
        @apply bg-white flex flex-col justify-center gap-5 rounded-md py-5 px-8 shadow-lg;
        width: 350px;
    }

    .login-wrapper > form > header {
        @apply text-center font-bold text-xl text-blue-600
    }

    .form-input-group > input {
        @apply w-full py-1 px-2 border-l-2 border-blue-600 outline-none
    }

    form > p > a {
        @apply text-blue-600
    }

    .listOfErrors > ul > li {
        @apply list-none font-semibold;
        color: red;
    }
</style>