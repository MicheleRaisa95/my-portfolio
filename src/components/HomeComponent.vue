<template>
  <div class="home container mt-5">
    <div class="row text-center">
      <div class="col-12">
        <h1 class="display-4">Benvenuto nel mio Portfolio</h1>
        <p class="lead mt-3">
          Sviluppatore Fullstack Junior specializzato in Vue.js, Laravel, e SCSS
        </p>
        <div class="mt-5">
          <a href="#projects" class="btn btn-primary btn-lg me-3"
            >Vedi Progetti</a
          >
          <a href="#contact" class="btn btn-outline-secondary btn-lg"
            >Contattami</a
          >
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 d-flex justify-content-center">
        <a href="#" class="mx-2"><i class="fab fa-github fa-2x"></i></a>
        <a href="#" class="mx-2"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="#" class="mx-2"><i class="fas fa-envelope fa-2x"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: $primary;
    margin-bottom: 1rem;
  }

  .lead {
    color: $secondary;
  }

  a {
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-3px);
    }
  }

  .fab,
  .fas {
    color: $secondary;
    &:hover {
      color: $primary;
    }
  }
}
</style>
