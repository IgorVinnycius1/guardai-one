<template>
  <div class="sign-up">
    <h1>Crie uma nova conta</h1>
    <input type="text" placeholder="Primeiro nome" v-model="firstName" />
    <br />
    <input type="text" placeholder="Segundo nome" v-model="secondName" />
    <br />
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
import axios from "axios"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyD2u1erHZLpulbdC4KI3LAU2FwtnoFUQi4",
//   authDomain: "guardai-389da.firebaseapp.com",
//   projectId: "guardai-389da",
//   storageBucket: "guardai-389da.appspot.com",
//   messagingSenderId: "961333327773",
//   appId: "1:961333327773:web:090c7901657f2e74bd6174",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default {
  name: "SignUpPage",
  data() {
    return {
      firstName: "",
      secondName: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    async signUp() {
      try{
        const response = await axios.post("http://localhost:3000/users",
          {
            firstName: this.firstName,
            secondName: this.secondName,
            email: this.email,
            password: this.senha
          }
        )

      if(response.status == 201){
        const login = await axios.post("http://localhost:3000/users/login",{
          email: this.email,
          password: this.senha
        })

        localStorage.setItem("UserToken", login.data.token)
        localStorage.setItem("User", JSON.stringify(login.data.user))

        await axios.post("http://localhost:3000/stocks",{
          name: `Estoque de ${response.data.firstName}`
        },{
          headers:{
            Authorization: `Bearer ${login.data.token}`
          }
        })

        this.$router.replace("/estoque");
      }
      } catch(err){
        alert(err.response.data.error)
      }


      // createUserWithEmailAndPassword(auth, this.email, this.senha)
      //   .then((user) => {
      //     this.$router.replace("/");
      //     alert(`Bem Vindo, ${user}`);
      //   })
      //   .catch((err) => {
      //     alert("Aconteceu algo inesperado: " + err.message);
      //   });
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
