<script setup lang="ts">
import { ref } from 'vue'
import useAssignmentStore from "../stores/AssignmentStore.js";
import router from '../router';
const assignmentStore = useAssignmentStore();

const search = ref("")

function submit(e: Event) {
    (e.target! as HTMLFormElement).reset();
    console.log(search.value)
    assignmentStore.getRepos(search.value)
    router.push({path: '/repos'})
}
</script>


<template>
    <form @submit.prevent="submit($event)" >
        <input type="text" v-model="search">
        <input type="submit" value="Search">
    </form>
</template>../stores/AssignmentStore