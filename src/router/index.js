import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/HomeComponent.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue";
import SkillsComponent from "../components/SkillsComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsComponent,
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillsComponent,
  },
  {
    path: "/about",
    name: "About",
    component: AboutComponent,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
