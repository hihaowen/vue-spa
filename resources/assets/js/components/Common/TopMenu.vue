<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a class="navbar-brand" href="#">Vue-SPA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">首页 <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">关于</router-link>
                </li>
                <li class="nav-item" v-if="! user.authenticated">
                    <router-link class="nav-link" to="/register">注册</router-link>
                </li>
                <li class="nav-item" v-if="! user.authenticated">
                    <router-link class="nav-link" to="/login">登录</router-link>
                </li>
                <li class="nav-item" v-if="user.authenticated">
                    <router-link class="nav-link" to="/profile">个人中心</router-link>
                </li>
                <li v-if="user.authenticated">
                    <a @click.prevent="logout" href="#">退出</a>
                </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'top-menu',
        computed: {
            ...mapState({
                user: state => state.AuthUser
            })
        },
        methods: {
            logout() {
                this.$store.dispatch('logoutRequest').then(response => {
                    this.$router.push({name: 'home'})
                })
            }
        }
    }
</script>