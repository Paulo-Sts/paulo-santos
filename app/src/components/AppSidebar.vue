<template>
  <div class="sidebar">
    <!-- Seu nome e cargo -->
    <div class="sidebar-header">
      <h1>Paulo Santos</h1>
      <p>Full Stack Developer & Data Analyst</p>
    </div>

    <!-- Menu de navegação -->
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>

    <!-- Ícones de contato -->
    <div class="contact-icons">
      <a href="https://github.com/seu-github" target="_blank" class="icon">
        <i class="fab fa-github"></i>
      </a>

      <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" class="icon">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
};
</script>

<style scoped>
.sidebar {
  width: 50%;
  box-sizing: border-box;
  padding: 5% 0% 8% 20%;
  /* background-color: #333; */
  position: sticky;
  height: 100vh;
  z-index: 1;
}

.sidebar-header h1 {
  font-size: 3em;
  padding: 0;
  margin: 0 10px;
  color: #fff;
}

.sidebar-header p {
  font-size: 1.2em;
  padding: 0;
  margin: 0 10px;
  color: #fff;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 10px 10px;
}

.sidebar nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 0.8em;
}

.sidebar nav ul li a:hover {
  color: #0073b1; /* Cor do hover do link */
}

/* Estilo dos ícones */
.contact-icons {
  display: flex;
  justify-content: left;
  margin-top: 20px;
}

.icon {
  font-size: 24px;
  color: #fff;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.icon:hover {
  color: #0073b1; /* Cor do LinkedIn ou GitHub ao passar o mouse */
}
</style>
