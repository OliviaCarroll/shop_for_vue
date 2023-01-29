import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import haveAccessToken from './auth-guard'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: [haveAccessToken],
  },
  {
    path: '/profile/:id',
    name: 'profile',
    beforeEnter: [haveAccessToken],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue'),
    props: (route: {params: { id: number} }) => {
      const id = Number(route.params.id)
      return isNaN(id) ? { id: null } : { id };
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    beforeEnter: [haveAccessToken],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue'),
    props: (route: {params: { id: number } }) => {
      const id = Number(route.params.id)
      return isNaN(id) ? { id: null } : { id };
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/:pathMatch(.*)',
    component: import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
