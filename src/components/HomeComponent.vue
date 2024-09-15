<template>
  <div class="home">
    <div class="container">
      <div class="row min-vh-100 align-items-center">
        <div class="col-lg-7 intro-text">
          <!-- ... (il resto del contenuto rimane invariato) ... -->
        </div>
        <div class="col-lg-5 intro-visual d-none d-lg-block">
          <svg
            class="code-animation"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- ... (il contenuto SVG rimane invariato) ... -->
          </svg>
        </div>
      </div>
    </div>
    <div class="scroll-down">
      <a @click="scrollToAbout" class="animate-scroll">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  methods: {
    scrollToAbout() {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Se la sezione non è presente nella stessa pagina,
        // potresti voler navigare a una pagina separata
        this.$router.push({ name: "About" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// Nuova palette di colori
$primary-color: #2c3e50; // Blu scuro
$secondary-color: #3498db; // Blu chiaro
$accent-color: #e74c3c; // Rosso
$background-color: #ecf0f1; // Grigio chiaro
$text-color: #34495e; // Grigio scuro

.home {
  background-color: $background-color;
  position: relative;
  overflow: hidden;
  font-family: "Roboto", sans-serif; // Cambio del font

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, $secondary-color 0%, transparent 50%);
    opacity: 0.1;
    z-index: -1;
  }

  .intro-text {
    padding: 2rem;

    h1 {
      color: $primary-color;
      font-size: 3rem;
      letter-spacing: -1px;
    }

    h2 {
      color: $accent-color;
      font-size: 1.5rem;
    }

    p {
      color: $text-color;
      max-width: 600px;
      font-size: 1.2rem;
    }
  }

  .profile-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid $primary-color;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .social-links {
    a {
      color: $primary-color;
      transition: color 0.3s ease;

      &:hover {
        color: $accent-color;
      }
    }
  }

  .intro-visual {
    svg {
      width: 100%;
      height: auto;
    }
  }

  .code-animation {
    font-family: "Fira Code", monospace; // Font per il codice
    font-size: 16px;

    .code-line {
      fill: $secondary-color;
      opacity: 0;
      animation: fadeIn 0.5s ease-in-out forwards;
    }

    @for $i from 1 through 10 {
      .code-line:nth-child(#{$i}) {
        animation-delay: #{$i * 0.3}s;
      }
    }
  }
}

.btn-primary {
  background-color: $primary-color;
  border-color: $primary-color;
  &:hover {
    background-color: darken($primary-color, 10%);
    border-color: darken($primary-color, 10%);
  }
}

.scroll-down {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: $primary-color;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: $accent-color;
      transform: translateY(5px);
    }
  }
}

.animate-scroll {
  display: inline-block;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
