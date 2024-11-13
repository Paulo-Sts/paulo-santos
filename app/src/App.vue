<template>
  <div id="app">
    <app-layout />
  </div>
</template>

<script>
import AppLayout from './views/AppLayout.vue';  

export default {
  name: 'App',
  components: {
    AppLayout 
  }
}
</script>

<style>

body {
  font-family: 'Poppins', 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
}

</style>
