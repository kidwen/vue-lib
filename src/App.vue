<template>
    <section id="app">
        <el-row>
            <el-col :span="2" style="min-width: 200px">
                <el-menu
                    router
                    :default-active="$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <el-menu-item index="/home" route="home">
                        <i class="el-icon-menu"></i>
                        <span slot="title"> home </span>
                    </el-menu-item>
                    <el-menu-item index="/dragableTree" route="dragableTree">
                        <i class="el-icon-menu"></i>
                        <span slot="title"> dragableTree </span>
                    </el-menu-item>
                    <el-menu-item index="/preview" route="preview">
                        <i class="el-icon-menu"></i>
                        <span slot="title"> preview </span>
                    </el-menu-item>
                    <el-menu-item index="/menu" route="menu">
                        <i class="el-icon-menu"></i>
                        <span slot="title"> menu </span>
                    </el-menu-item>
                    <el-menu-item index="/popover-menu" route="menu">
                        <i class="el-icon-menu"></i>
                        <span slot="title"> popover-menu </span>
                    </el-menu-item>
                    <el-menu-item index="/store" route="store">
                        <i class="el-icon-menu"></i>
                        <span slot="title"> store </span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="12" style="padding: 20px">
                <router-view></router-view>
            </el-col>
        </el-row>
    </section>
</template>

<script>
export default {
    name: "App",
    created() {
        console.log(this.$route);
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
