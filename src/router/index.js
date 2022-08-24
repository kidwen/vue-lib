import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HelloWord from '../components/HelloWorld.vue';
import DragableTree from '../components/dragableTree/DragableTree.vue';
import Preview from '../components/preview.vue';
import NavMenu from '../components/NavMenu.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'home',
        },
        {
            path: '/home',
            component: HelloWord,
        },
        {
            path: '/dragableTree',
            component: DragableTree,
        },
        {
            path: '/preview',
            component: Preview,
        },
        {
            path: '/menu',
            component: NavMenu,
        }
    ]
});

export default router
