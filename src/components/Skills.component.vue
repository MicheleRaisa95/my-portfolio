<template>
  <div class="skills container mt-5">
    <h2 class="text-center mb-5">Le Mie Competenze</h2>
    <div class="row">
      <div
        v-for="category in skillCategories"
        :key="category.name"
        class="col-md-4 mb-4"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ category.name }}</h5>
            <ul class="list-group list-group-flush">
              <li
                v-for="skill in category.skills"
                :key="skill.name"
                class="list-group-item"
              >
                <div class="d-flex justify-content-between align-items-center">
                  <span>{{ skill.name }}</span>
                  <div class="progress" style="width: 60%">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="{ width: skill.level + '%' }"
                      :aria-valuenow="skill.level"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ skill.level }}%
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
  data() {
    return {
      skillCategories: [
        {
          name: "Front-end",
          skills: [
            { name: "HTML", level: 90 },
            { name: "CSS/SCSS", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "Vue.js", level: 75 },
          ],
        },
        {
          name: "Back-end",
          skills: [
            { name: "PHP", level: 80 },
            { name: "Laravel", level: 75 },
            { name: "SQL", level: 70 },
          ],
        },
        {
          name: "Altri",
          skills: [
            { name: "Git", level: 75 },
            { name: "RESTful APIs", level: 70 },
            { name: "Responsive Design", level: 85 },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skills {
  .card {
    height: 100%;
  }
  .progress {
    height: 10px;
  }
}
</style>
