<template>
  <section id="experience" class="py-16 bg-gray-100">
    <h2 class="text-3xl font-bold text-center mb-8">Experiência Professional</h2>
    <div class="max-w-5xl mx-auto">
      <!-- Experience Item 1 -->
      <div v-for="(experience, index) in experiences" :key="index" class="mb-6">
        <div class="flex items-center cursor-pointer mb-2" @click="toggleExperience(index)">
          <h3 class="text-xl font-semibold">{{ experience.title }} @{{ experience.company }}</h3>
          <span class="mx-4 text-gray-400">|</span>
          <p class="text-gray-600">{{ experience.dates }}</p>
          <span class="ml-auto text-gray-500">{{ experience.expanded ? '-' : '+' }}</span>
        </div>

        <!-- Descrição e Tecnologias (Mostra ou esconde ao clicar) -->
        <transition
          name="expand-transition"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div v-if="experience.expanded" class="overflow-hidden">
            <p class="text-gray-700 mb-2">{{ experience.description }}</p>

            <!-- Tecnologias como itens lado a lado -->
            <div class="flex flex-wrap gap-4 text-gray-700">
              <span v-for="(tech, index) in experience.technologies" :key="index" class="bg-gray-200 px-4 py-2 rounded-full">
                {{ tech }}
              </span>
            </div>
          </div>
        </transition>

        <hr class="my-4 border-t-2 border-gray-200" />
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'ExperienceComponent',
  data() {
    return {
      experiences: [
        {
          title: "FullStack Developer",
          company: "Logbits - Soluções Tecnológicas",
          dates: "Julho 2022 - Junho 2024",
          description: `Desenvolvimento de API RESTful com NodeJs para sistema de gestão do departamento de marketing de uma empresa. 
                        Desenvolvimento de API para sitema de gestão de contratos de clínica de estética. 
                        Gestão Ágil desses dois projetos e da equipe de desenvolvimento.`,
          technologies: ["TypeScript", "Node.js", "MySQL", "Vue.js", "Scrum", "Kanban"],
          expanded: false
        },
        {
          title: "Estagiário Back-end",
          company: "Nutrin Group",
          dates: "Novembro 2021 - Julho 2022",
          description: "Desenvolvi uma API RESTful em NodeJs para gerenciar o conteúdo de um aplicativo de meditação chamado Mynd.",
          technologies: ["JavaScript", "NodeJs", "MySql", "Sequelize", "Swagger"],
          expanded: false
        },
        {
          title: "Estudante Pesquisador PIBIC",
          company: "RailBee",
          dates: "Agosto 2019 - Setembro 2021",
          description: `Trabalhei na construção de páginas para aplicação web do sistema telemétrico RailBee de monitoramento de trens em tempo real. 
                        Também colaborei nos testes da API feita em Python com Django responsável por gerenciar a aplicação web.`,
          technologies: ["HTML5", "CSS3", "Python", "Django"],
          expanded: false
        }
      ]
    };
  },
  methods: {
    toggleExperience(index) {
      this.experiences[index].expanded = !this.experiences[index].expanded;
    },
    beforeEnter(el) {
      el.style.height = '0';
    },
    enter(el) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'height 0.5s ease-in-out';
      el.style.height = `${el.scrollHeight}px`;
    },
    leave(el) {
      el.style.transition = 'height 0.5s ease-in-out';
      el.style.height = '0';
    }
  }
};
</script>

<style scoped>
/* Adicionando um cursor pointer para dar um feedback visual ao clicar */
.cursor-pointer {
  cursor: pointer;
}
</style>