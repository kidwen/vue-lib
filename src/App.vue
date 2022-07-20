<template>
    <section id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <ul>
            <li>
                <router-link to="/home">home</router-link>
            </li>
            <li>
                <router-link to="/preview">2</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </section>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    // components: {
    //     HelloWorld
    // }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
