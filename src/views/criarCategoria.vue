<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue';
import axios from 'axios';
import {ref} from "vue"
import {useRouter} from "vue-router"

const router = useRouter()

const name = ref("")
const description = ref("")

async function criar(){
    const user = JSON.parse(localStorage.getItem("User"))

    const stocks = await axios.get(`http://localhost:3000/users/${user.id}/stocks`)

    const response = await axios.post(`http://localhost:3000/stock/${stocks.data[0].id}/categories`,{
        name: name.value, description: description.value
    },
    {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("UserToken")}`
    }
    })

    if(response.status == 201){
        router.replace("/estoque/criarCategoria")
    }
}
</script> 

<template>
<SidebarComponent />
  <div class="main">
    <h1>Criar Compartimento</h1>
    <input type="text" placeholder="Nome" v-model="name">
    <input type="text" placeholder="Descrição" v-model="description">
    <button @click="criar">Criar</button>
    <button @click="$router.replace('/estoque')">Voltar</button>
  </div>
</template> 

<style scoped></style> 
