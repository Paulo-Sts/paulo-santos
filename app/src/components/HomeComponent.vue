<template>
    <div class="h-screen bg-gradient-to-r from-gray-950 via-gray-850 to-gray-800 bg-[length:400%_400%] animate-gradient">
      
      <div class="flex flex-col items-center justify-center h-screen">

        <!-- Nome e Cargo  -->
        <div class="text-center mb-16 text-silver">
          <h1 class="text-7xl font-semibold mb-4" >Paulo Santos</h1>
          <p class="text-xl">FullStack Developer & Data Analyst</p>
        </div>
  
        <!-- Menu de Navegação -->
        <nav class="flex flex-col items-center justify-center space-y-4 mb-16">
          <ul class="flex space-x-8">
            <li>
              <a href="#expertise" class="text-lg text-silver relative group">Expertise
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-silver transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#experience" class="text-lg text-silver relative group">Experience
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-silver transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contact" class="text-lg text-silver relative group">Contact
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-silver transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
      
      <!-- Chamando as Seções como Componentes -->
      <ExpertiseComponent />
      <ExperienceComponent />
      <ContactComponent />
     
    </div>
</template>
  
<script>
import ExpertiseComponent from './ExpertiseComponent.vue'
import ExperienceComponent from './ExperienceComponent.vue'
import ContactComponent from './ContactComponent.vue'

export default {
  name: 'HomeComponent',
  components: {
    ExpertiseComponent,
    ExperienceComponent,
    ContactComponent,
  }
}
</script>

<style scoped>
/* Adicione estilos globais, se necessário */
</style>
  