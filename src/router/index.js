import { createRouter, createWebHistory } from 'vue-router'
import Clientes from '../views/Clientes.vue'
import Products from '../views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/clientes',
      name: 'home',
      component: Clientes
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: Products
    }
  ]
})

export default router
