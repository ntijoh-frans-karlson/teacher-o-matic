<script setup lang="ts">
import { useRoute } from 'vue-router';
import RepoCard from '../components/RepoCard.vue'
import useAssignmentStore from '../stores/AssignmentStore';
const route = useRoute()
const assignmentStore = useAssignmentStore();

console.log(`Route: ${route.params.user}` )
assignmentStore.fetchRepos(route.params.user as string)

</script>

<template>
    <ul>
      <div id="card-container"></div>
      <template v-for="repo in assignmentStore.getRepos">
        <RepoCard :title="repo.name" :forksUrl="repo.forks_url"/>
      </template>
    </ul>    
</template>

<style scoped>
</style>