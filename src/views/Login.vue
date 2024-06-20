<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <div class="btn-login">
      <button @click="login">Login</button>
    </div>
    <p>
      Você não tem conta?
      <span>
        <router-link to="/register">Crie uma conta</router-link>
      </span>
    </p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.senha)
        .then((user) => {
          this.$router.replace("/");
          alert(`Bem Vindo ${{ user }}`);
        })
        .catch((err) => {
          alert("Não foi possível realizar o login. " + err.message);
        });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

input[type="text"],
input[type="password"] {
  width: 80%;
  max-width: 400px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
}

.btn-login {
  width: 80%;
  max-width: 400px;
  display: flex;
  justify-content: center;
}

.btn-login button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login button:hover {
  background-color: #45a049;
}

p {
  margin-top: 1rem;
}

p a {
  color: #ffeb3b;
  text-decoration: none;
  transition: color 0.3s ease;
}

p a:hover {
  color: #ffc107;
}
</style>
