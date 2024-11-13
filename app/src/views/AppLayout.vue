<template>
  <div class="app-layout">
    <app-sidebar /> 
    <app-content/>
  </div>
</template>

<script>
import AppSidebar from '@/components/AppSidebar.vue'; 
import AppContent from '../components/AppContent.vue';

export default {
  name: 'AppLayout', 
  components: {
    AppSidebar,
    AppContent 
  }
}
</script>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  flex-direction: row;
  background-color: #333; 
}
</style>
