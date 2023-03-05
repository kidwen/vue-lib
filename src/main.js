import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';

console.log(store);

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
    store: store,
    router,
    render: h => h(App)
}).$mount('#app');
