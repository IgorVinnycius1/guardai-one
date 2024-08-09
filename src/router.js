import { createRouter, createWebHistory } from 'vue-router'
import { userLoginVerify } from './functions/userFunctions'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('./views/RegisterView.vue')
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('./views/ManagerHomeView.vue')
    },
    {
      path: '/stock/:id/employee-management',
      name: 'EmployeeManagement',
      component: () => import('./views/EmployeeManagement.vue')
    },
    {
      path: '/stock/:id',
      name: 'StockPage',
      component: () => import('./views/StockView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  if (!userLoginVerify() && !['/login', '/signup'].includes(to.path)) {
    return {
      path: '/login'
    }
  }
})

export default router
