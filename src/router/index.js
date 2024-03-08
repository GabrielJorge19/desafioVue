import { createRouter, createWebHashHistory } from 'vue-router'
import Clientes from '../views/Clientes.vue'
import Products from '../views/Products.vue'

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
