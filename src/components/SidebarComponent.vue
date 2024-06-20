<template>
  <div>
    <div class="hamburger" @click="toggleSidebar">
      <i class="icon">☰</i>
    </div>
    <div :class="['sidebar', { 'is-active': isActive }]">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Guardai Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/estoque"
              ><i class="icon">🗂️</i> Estoque</router-link
            >
          </li>
          <li>
            <router-link to="/historico"
              ><i class="icon">📜</i> Histórico</router-link
            >
          </li>
          <li class="locked">
            <a href="#"><i class="icon">📊</i> Estatísticas</a>
          </li>
          <li>
            <a href="#"><i class="icon">⚙️</i> Configurações</a>
          </li>
          <li>
            <a href="#"><i class="icon">🚪</i> Sair da conta</a>
          </li>
          <li>
            <a href="#"><i class="icon">❓</i> Ajuda</a>
          </li>
          <br>
          <li>
            <a href="#" @click="sair">Sair</a>
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="isActive" class="overlay" @click="toggleSidebar"></div>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';

export default {
  name: "SidebarComponent",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isActive = !this.isActive;
    },
    sair() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.replace('login');
      }).catch((error) => {
        console.error("Error signing out: ", error);
      });
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #525df5;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease;
  z-index: 2000;
  transform: translateX(0);
}

.sidebar.is-active {
  transform: translateX(0);
}

.hamburger {
  display: none;
  position: fixed;
  top: 15px;
  left: 15px;
  cursor: pointer;
  z-index: 3000;
}

.hamburger .icon {
  font-size: 24px;
  color: #525df5;
}

.logo img {
  width: 80%;
  max-width: 100px;
  margin-bottom: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

nav ul li {
  margin: 10px 0;
}

nav ul li a,
nav ul li router-link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
}

nav ul li a:hover,
nav ul li router-link:hover {
  background-color: #3b47db;
}

nav ul li.locked a {
  background-color: #aaa;
  pointer-events: none;
}

nav ul li a .icon,
nav ul li router-link .icon {
  margin-right: 10px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1500;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar.is-active {
    transform: translateX(0);
  }
  .hamburger {
    display: block;
  }
  .logo img {
    width: 60px;
  }
  nav ul li a,
  nav ul li router-link {
    font-size: 14px;
    padding: 8px 12px;
  }
}
</style>
