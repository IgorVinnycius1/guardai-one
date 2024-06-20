import { createRouter, createWebHashHistory } from "vue-router";
import EstoqueView from "../views/EstoqueView.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import HomeView from "../views/HomeView.vue";
import criarCategoria from "../views/criarCategoria.vue";
// import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
  {
    path: "/estoque",
    name: "estoque",
    component: EstoqueView,
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/estoque/criarCategoria",
    name: "criarCategoria",
    component: criarCategoria,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const auth = getAuth();
//   const currentUser = auth.currentUser;
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next("login");
//   else if (!requiresAuth && currentUser) next("estoque");
//   else next();
// });

export default router;
