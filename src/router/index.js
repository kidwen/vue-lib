import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import HelloWord from '../components/HelloWorld.vue';
import Preview from '../components/preview.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component: HelloWord
        },
        {
            path: '/preview',
            component: Preview
        }
    ]
})

export default router
