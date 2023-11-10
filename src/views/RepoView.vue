<script setup lang="ts">
import RepoCard from '../components/RepoCard.vue'
import useAssignmentStore from '../stores/AssignmentStore';


const assignmentStore = useAssignmentStore();




</script>

<template>
    <ul>
      <div id="card-container"></div>
      <template v-for="repo in assignmentStore.repos">
        <RepoCard :title="repo.name" :forksUrl="repo.forks_url"/>
      </template>
    </ul>    
</template>

<style scoped>
</style>../stores/AssignmentStore