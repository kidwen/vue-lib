import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HelloWorld from '../components/HelloWorld.vue';
import DragableTree from '../components/dragableTree/DragableTree.vue';
import Preview from '../components/Preview.vue';
import NavMenu from '../components/NavMenu.vue';
import PopoverNavMenu from '../components/PopoverNavMenu.vue';
import Store from '../components/StoreDemo.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'home',
        },
        {
            path: '/home',
            component: HelloWorld,
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
        },
        {
            path: '/popover-menu',
            component: PopoverNavMenu,
        },
        {
            path: '/store',
            component: Store,
        }
    ]
});

export default router
