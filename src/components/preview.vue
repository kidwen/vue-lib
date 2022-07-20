<template>
    <div>
        <div>preview</div>
        <router-link to="preview/a">a</router-link>
        <router-link to="preview/b">b</router-link>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
export default {
    name: 'Preview',
    data() {
        return {
            json: [
                { path: '/a', html: '<div>a</div>', component: () => import('./HelloWorld.vue') },
                { path: '/b', html: '<div>b</div>', component: () => import('./HelloWorld.vue') }
            ]
        }
    },
    mounted() {
        console.log(this.$route, this.json);
        this.$router.beforeEach((to, from, next) => {
            console.log(to);
            console.log(this.$router.options.routes);
            this.$router.options.routes[2].children = this.json
            this.$router.addRoutes(this.$router.options.routes);
            console.log(this.$router);
            next()
            // next({ ...to, replace: true })
        })

    },

}
</script>

<style>
</style>
