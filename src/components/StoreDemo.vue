<template>
    <div>store</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    name: "StoreDemo",
    data() {
        window.aa = this;
        return {
            as: "1",
        };
    },
    computed: {
        ...mapState(["user"]),
        ...mapGetters(["isOver"]),
        getUserById() {
            return this.$store.getters.getUserById;
        },
    },
    mounted() {
        console.log("store-demo", this.getUserById(1).name);
    },
};
</script>

<style scoped>
</style>
