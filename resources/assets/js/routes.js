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
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})