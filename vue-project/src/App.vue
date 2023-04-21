<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ToolBar from './components/ToolBar.vue'
import './assets/tailwind.css'
import './assets/training.css'
</script>

<template>
  <!-- <v-app>
    <ToolBar />
  </v-app> -->
  
  <RouterView/>
</template>

<style scoped>

.questrial {
  font-family: "Questrial";
}

</style>
