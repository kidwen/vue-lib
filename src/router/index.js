import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import HelloWord from '../components/HelloWorld.vue';
import Style from '../components/class-style.component.vue';

const router = new VueRouter({
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
            path: 'style',
            component: Style
        }
    ]
})

export default router
