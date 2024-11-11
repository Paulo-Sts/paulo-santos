<template>
    <section>
      <h2>Contato</h2>
      <p>
        Você pode me encontrar em várias plataformas ou me enviar uma mensagem diretamente.
      </p>
      <ul>
        <li>Email: exemplo@email.com</li>
        <li>LinkedIn: <a href="#">Meu LinkedIn</a></li>
        <li>GitHub: <a href="#">Meu GitHub</a></li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
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
    margin-bottom: 1rem;
  }
  </style>
  