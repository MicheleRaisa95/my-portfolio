<template>
  <div id="app">
    <header class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">Michele Raisa</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects" active-class="active"
                >Progetti</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skills" active-class="active"
                >Competenze</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active"
                >Chi Sono</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" active-class="active"
                >Contatti</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-light py-4 mt-5">
      <div class="container text-center">
        <p>&copy; 2024 Michele Raisa. Tutti i diritti riservati.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  .nav-link {
    font-weight: 500;
    color: $secondary;
    transition: color 0.3s ease;

    &:hover,
    &.active {
      color: $primary;
    }
  }
}

main {
  min-height: calc(
    100vh - 56px - 80px
  ); // Adjust based on your header and footer height
}
</style>
