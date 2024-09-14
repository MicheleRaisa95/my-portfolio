<template>
  <div id="app">
    <HomeComponent />
    <ProjectsComponent />
    <SkillsComponent />
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
  },
};
</script>
