<template>
  <SidebarComponent />
  <div class="main">
    <header>
      <h1>Estoque</h1>
      <div class="search-add">
        <button @click="$router.replace('/estoque/criarCategoria')">+ Adicionar Compartimento</button>
      </div>
    </header>
    <div class="compartments">
      <div class="compartment" v-for="item in compartments" :key="item.title">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue';
import axios from 'axios';
import { reactive } from 'vue';

const user = JSON.parse(localStorage.getItem("User"))

const stock = await axios.get(`http://localhost:3000/users/${user.id}/stocks`)
const categories = await axios.get(`http://localhost:3000/stock/${stock.data[0].id}/categories`)

const compartments = reactive(categories.data)
</script>

<style scoped>
.main {
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

header h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.search-add {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

header input {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
}

header button {
  padding: 10px 20px;
  background-color: #525df5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

header button:hover {
  background-color: #3b47db;
}

.compartments {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
}

.compartment {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  width: calc(33.333% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.compartment h2 {
  margin: 0 0 10px 0;
  color: #525df5;
  font-size: 20px;
}

.compartment p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

@media (max-width: 1024px) {
  .main {
    padding: 10px;
  }
  .compartment {
    width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .main {
    padding: 10px;
  }
  .compartment {
    width: 100%;
  }
}
</style>
