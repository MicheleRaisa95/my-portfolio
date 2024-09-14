<template>
  <div class="projects container mt-5">
    <h2 class="text-center mb-5">I Miei Progetti</h2>
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4 mb-4">
        <div class="card">
          <img :src="project.image" class="card-img-top" :alt="project.title" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a
                  :href="project.liveLink"
                  class="btn btn-sm btn-outline-secondary"
                  target="_blank"
                  >View</a
                >
                <a
                  :href="project.codeLink"
                  class="btn btn-sm btn-outline-primary"
                  target="_blank"
                  >Code</a
                >
              </div>
              <small class="text-muted">{{
                project.technologies.join(", ")
              }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsComponent",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Progetto 1",
          description: "Breve descrizione del progetto 1.",
          image: "https://via.placeholder.com/350x150",
          liveLink: "#",
          codeLink: "#",
          technologies: ["Vue.js", "SCSS"],
        },
        {
          id: 2,
          title: "Progetto 2",
          description: "Breve descrizione del progetto 2.",
          image: "https://via.placeholder.com/350x150",
          liveLink: "#",
          codeLink: "#",
          technologies: ["Laravel", "MySQL"],
        },
        // Aggiungi altri progetti come necessario
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  .card {
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
