<template>
    <section>
      <h2>Meu Portfólio</h2>
      <p>
        Aqui estão alguns dos meus projetos mais recentes. Fique à vontade para explorar!
      </p>
      <!-- Exemplo de projeto -->
      <ul>
        <li>
          <a href="#">Projeto 1</a>: Descrição do projeto 1.
        </li>
        <li>
          <a href="#">Projeto 2</a>: Descrição do projeto 2.
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PortfolioSection',
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
  