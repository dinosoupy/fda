import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DealsView from '../views/DealsView.vue'
import ManageBookingView from '../views/ManageBookingView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/deals',
    name: 'deals',
    component: DealsView
  },
  {
    path: '/manage-booking',
    name: 'manage-booking',
    component: ManageBookingView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
