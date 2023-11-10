<script setup lang="ts">
defineProps<{ title: string, forksUrl: string }>()



</script>

<template>
    <div class="repo-card">
        <span>{{ title }}</span>
        <div id="links">
            <a href="#">Github</a> | <button>Forks</button>
        </div>

    </div>
 
</template>

<style scoped>
.repo-card {
    display: flex;
    border: 1px solid;
    flex-direction: column;
    width: 40%;
    align-items: center;
}

#links {
    display: flex;
    margin: 5px;
    padding: 5px;
}


</style>