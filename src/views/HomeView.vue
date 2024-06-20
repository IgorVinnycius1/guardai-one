<template>
  <div class="home">
    <h1>Bem-vindo ao Guardai!</h1>
    <p>Seu estoque online seguro e confiável.</p>
    <div class="buttons">
      <router-link to="/login">
        <button class="btn-login" @click="login">Login</button>
      </router-link>
      <router-link to="/register">
        <button class="btn-signup">Cadastro</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #525df5;
  color: white;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login {
  background-color: #4caf50;
  color: white;
}

.btn-login:hover {
  background-color: #45a049;
}

.btn-signup {
  background-color: #ffeb3b;
  color: black;
}

.btn-signup:hover {
  background-color: #ffc107;
}
</style>
