
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

import router from './routes'

import store from './store/index'

import jwtToken from './helpers/jwt'

import App from './components/App'

Vue.use(VueRouter)

Vue.component('app', App)

import zh_CN from './locale/zh_CN';

import VeeValidate, { Validator } from 'vee-validate';

axios.interceptors.request.use(function(config) {
    if(jwtToken.getToken()) {
        config.headers['Authorization'] = 'Bearer ' + jwtToken.getToken();
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

Validator.localize('zh_CN', zh_CN);

Vue.use(VeeValidate);

new Vue({
    el: '#app',
    router,
    store
});