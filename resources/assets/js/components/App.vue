<template>
    <div>
        <TopMenu></TopMenu>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    import TopMenu from './Common/TopMenu'
    import jwtToken from './../helpers/jwt'
    import Cookie from 'js-cookie'

    export default {
        created() {
            if( jwtToken.getToken() ) {
                this.$store.dispatch('setAuthUser');
            } else if (Cookie.get('auth_id')) {
                this.$store.dispatch('refreshToken');
            }
        },
        components: {
            TopMenu
        }
    }
</script>