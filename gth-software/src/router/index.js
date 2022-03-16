import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Inspecteur from '../views/Inspecteur.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

var isAuthenticated = false;

function guardMyrouteAdmin(to, from, next) {


  if (sessionStorage.getItem('adminId'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  }
  else {
    next('/'); // go to '/login';
  }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    beforeEnter: guardMyrouteAdmin,
    component: Admin,
  },
  {
    path: '/inspecteur',
    name: 'Inspecteur',
    component: Inspecteur
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
