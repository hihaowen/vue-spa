import VueRouter from 'vue-router'

let routes = [
    {
        path: '/',
        component: require('./components/Pages/Home')
    },
    {
        path: '/about',
        component: require('./components/Pages/About')
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('./components/Posts/Post')
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/Register/Register')
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/Pages/Confirm')
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/Login/Login')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})