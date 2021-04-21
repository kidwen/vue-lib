<template>
    <div>{{ message }}</div>
</template>

<script lang="ts">
export interface A {
    name?: string;
}
import Vue from "vue";
import Component from "vue-class-component";

@Component<ClassStyleComponent>({
    watch: {
        message(id: string) {
            this.fetchPost(id);
        },
    },
})
export default class ClassStyleComponent extends Vue {
    message = "hello Word!";
    fetchPost(postId: string): Promise<void> {
        console.log(postId);
        return new Promise((resolve) => {
            resolve();
        });
        // ...
    }
}
</script>
