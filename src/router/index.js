import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/recipes',
        name: 'recipes',
        component: () => import(/* webpackChunkName: "about" */ '../views/Recipes.vue')
    },
    {
        path: '/recipes/:id',
        name: 'recipe',
        component: () => import(/* webpackChunkName: "about" */ '../views/Recipe.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from) {
        return { x: 0, y: 0 }
    },
})

export default router
