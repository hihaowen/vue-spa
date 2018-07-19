import VueRouter from 'vue-router'

import Store from './store/index'

import jwtToken from './helpers/jwt'

let routes = [
    {
        path: '/',
        component: require('./components/Pages/Home'),
        meta: {}
    },
    {
        path: '/about',
        component: require('./components/Pages/About'),
        meta: {}
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('./components/Posts/Post'),
        meta: {}
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/Register/Register'),
        meta: {}
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/Pages/Confirm'),
        meta: {}
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/Login/Login'),
        meta: {}
    },
    {
        path: '/profile',
        name: 'profile',
        component: require('./components/User/Profile'),
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
        if(Store.state.authenticated || jwtToken.getToken()) {
            return next()
        } else {
            return next({'name': 'login'})
        }
    }
    next()
})

export default router