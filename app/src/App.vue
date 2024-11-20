<template>
  <div id="app" class="relative">
    <!-- <app-layout /> -->

      <!-- Texto em Diagonal 
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 text-7xl text-red-500 opacity-20 z-10">
      Em Desenvolvimento
    </div>-->
     <home-component/>
  </div>
</template>

<script>
// import AppLayout from './views/AppLayout.vue';
import HomeComponent from './components/HomeComponent.vue';  

export default {
  name: 'App',
  components: {
    // AppLayout,
    HomeComponent 
  }
}
</script>

<style>

/* body {
  font-family: 'Poppins', 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
} */

</style>
