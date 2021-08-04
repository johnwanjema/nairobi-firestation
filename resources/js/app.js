/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('../sass/app.scss')

import Vue from 'vue'

window.Vue = require('vue');

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();

//v-form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;

//axios
import axios from "axios";
window.axios = axios;


//Bootstrtap vue
import BootstrapVue from 'bootstrap-vue'

//bootstapVue
Vue.use(BootstrapVue);
import 'bootstrap-vue/dist/bootstrap-vue.css'

//jquery
import $ from 'jquery'
window.$ = $

import Swal from 'sweetalert2'
window.Swal = Swal;

//UPPERCASE TEXT
Vue.filter('uppercaseText', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

//===momentjs ========
import moment from 'moment'

Vue.filter('filterDate', function (myDate) {
    return moment(new Date(myDate)).format('Do MMMM YYYY, HH:mm:ss A');
});

Vue.filter('filterDateOnly', function (myDate) {
    return moment(new Date(myDate)).format('Do MMMM YYYY');
});

Vue.filter('filterHumanDate', function (myDate) {
    return moment(new Date(myDate)).format('Do MMMM YYYY, h:mm:ss A');
})

Vue.filter('humanize', function (value) {
    return moment(value).fromNow()
});


//global registration
// import VueFormWizard from 'vue-form-wizard'
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// Vue.use(VueFormWizard)

// //custom directive to lazy load images
// import LazyLoadDirective from "./directives/lazyLoadDirective";
// Vue.directive("lazyload", LazyLoadDirective);


// import VueProgressBar from 'vue-progressbar'

// const options = {
//     color: '#32d101',
//     failedColor: 'red',
//     thickness: '5px',
//     transition: {
//         speed: '0.2s',
//         opacity: '0.6s',
//         termination: 300
//     },
//     autoRevert: true,
//     location: 'top',
//     inverse: false
// }

// Vue.use(VueProgressBar, options);



// let newVue = new Vue({});

// Intercept all requests
// window.axios.interceptors.request.use(
//     (config) => {
//         // do something before sending requests
//         newVue.$Progress.start();
//         return config
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

//401 interceptors
// axios.interceptors.response.use(function (response) {
//     newVue.$Progress.finish();
//     return response;
// }, function (error) {
//     newVue.$Progress.fail();
//     // console.log(error.response.status)
//     if (401 === error.response.status) {
//         window.location = '/login'
//     } else {
//         return Promise.reject(error);
//     }
// });

router.beforeEach((to, from, next) => {
    // console.log('');
    next();
})

const app = new Vue({
    el: '#app',
    router,
}).$mount('#app');
