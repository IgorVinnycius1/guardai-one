<template>
  <div class="content">
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>
<script>
import { Suspense } from 'vue';

export default {
  name: "App",
  components: {
    Suspense
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
