import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2u1erHZLpulbdC4KI3LAU2FwtnoFUQi4",
  authDomain: "guardai-389da.firebaseapp.com",
  projectId: "guardai-389da",
  storageBucket: "guardai-389da.appspot.com",
  messagingSenderId: "961333327773",
  appId: "1:961333327773:web:090c7901657f2e74bd6174",
};
initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
// Initialize Firebase
