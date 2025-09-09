import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
import List from '../views/List.vue'
import ItemDetails from '../views/ItemDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pofile', name: 'Profile', component: Profile },
  { path: '/about', name: 'About', component: About },
  { path: '/list', name: 'List', component: List},
  { path: '/list/:url', name: 'ItemDetails', component: ItemDetails}
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
