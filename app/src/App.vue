<template>
  <div id="app">
    <!-- <app-layout /> -->
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
