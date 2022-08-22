<template>
    <div>
        <div>preview</div>
        <router-link to="preview/a">a</router-link>
        <router-link to="preview/b">b</router-link>
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
        this.$router.beforeEach((to, from, next) => {
            this.$router.options.routes[2].children = this.json
            this.$router.addRoutes(this.$router.options.routes);
            next()
            // next({ ...to, replace: true })
        })

    },

}
</script>

<style>
</style>
