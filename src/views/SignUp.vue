<template>
  <div class="sign-up">
    <h1>Crie uma nova conta</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <div class="btn-register">
      <button @click="signUp">Registrar</button>
    </div>
    <span>
      ou retorne ao
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2u1erHZLpulbdC4KI3LAU2FwtnoFUQi4",
  authDomain: "guardai-389da.firebaseapp.com",
  projectId: "guardai-389da",
  storageBucket: "guardai-389da.appspot.com",
  messagingSenderId: "961333327773",
  appId: "1:961333327773:web:090c7901657f2e74bd6174",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default {
  name: "SignUpPage",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.senha)
        .then((user) => {
          this.$router.replace("/");
          alert(`Bem Vindo, ${user}`);
        })
        .catch((err) => {
          alert("Aconteceu algo inesperado: " + err.message);
        });
    },
  },
};
</script>

<style scoped>
.sign-up {
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

.btn-register {
  width: 80%;
  max-width: 400px;
  display: flex;
  justify-content: center;
}

.btn-register button {
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

.btn-register button:hover {
  background-color: #45a049;
}

span {
  margin-top: 1rem;
  text-align: center;
}

span a {
  color: #ffeb3b;
  text-decoration: none;
  transition: color 0.3s ease;
}

span a:hover {
  color: #ffc107;
}
</style>
