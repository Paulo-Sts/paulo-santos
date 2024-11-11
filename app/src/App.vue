<template>
  <div id="app">
    <!-- Cabeçalho -->
    <Header />

    <!-- Menu de navegação -->
    <nav>
      <ul>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>

    <!-- Seções -->
    <main>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </main>
  </div>
</template>

<script>
import Header from './components/HeaderSection.vue';
import About from './components/AboutSection.vue';
import Portfolio from './components/PortfolioSection.vue';
import Skills from './components/SkillsSection.vue';
import Contact from './components/ContactSection.vue';

export default {
  components: {
    Header,
    About,
    Portfolio,
    Skills,
    Contact
  }
};
</script>

<style>
/* Estilo simples para o menu e as seções */
nav ul {
  display: flex;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

section {
  padding: 2rem;
}
</style>
