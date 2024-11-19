<template>
  <section id="experience" class="py-16 bg-gray-100">
    <h2 class="text-3xl font-bold text-center mb-8">Professional Experience</h2>
    <div class="max-w-5xl mx-auto">
      <!-- Experience Item 1 -->
      <div v-for="(experience, index) in experiences" :key="index" class="mb-6">
        <div class="flex items-center cursor-pointer mb-2" @click="toggleExperience(index)">
          <h3 class="text-xl font-semibold">{{ experience.title }}</h3>
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
          company: "TechSolutions",
          dates: "January 2022 - Present",
          description: "Developed and maintained web applications with a focus on full-stack development.",
          technologies: ["React", "Node.js", "MySQL", "MongoDB"],
          expanded: false
        },
        {
          title: "Data Analyst",
          company: "DataCorp",
          dates: "August 2020 - December 2021",
          description: "Performed data analysis using Python and R. Created dashboards and reports with Power BI.",
          technologies: ["Python", "R", "Power BI", "SQL"],
          expanded: false
        },
        {
          title: "Web Developer Intern",
          company: "WebSolutions",
          dates: "June 2019 - July 2020",
          description: "Assisted in building and optimizing web pages using HTML, CSS, and JavaScript.",
          technologies: ["HTML", "CSS", "JavaScript"],
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