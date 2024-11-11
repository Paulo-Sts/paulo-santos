<template>
    <section>
      <h2>Minhas Habilidades</h2>
      <ul>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
        <li>Git</li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SkillsSection',
  };
  </script>
  
  <style scoped>
  section {
    padding: 2rem;
    background-color: #f9f9f9;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 0.5rem;
  }
  </style>
  