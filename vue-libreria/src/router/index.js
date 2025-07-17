import { createRouter, createWebHistory } from 'vue-router'
import LibrosView from '../views/LibroView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component:LibrosView
    },
    {
      path: '/nuevoLibro',
      name: 'nuevoLibro',
      
      component: () => import('../views/NuevoLibroView.vue'),
    },
     {
      path: '/editarLibro/:id',
      name: 'editarLibro',
      
      component: () => import('../views/EditarLibroView.vue'),
    }
  ],
})

export default router
