<template>
  <div class="about container mt-5">
    <h2 class="text-center mb-5">Chi Sono</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Il tuo nome"
          class="img-fluid rounded-circle"
        />
      </div>
      <div class="col-md-8">
        <h3>Il tuo nome</h3>
        <p class="lead">Sviluppatore Fullstack Junior</p>
        <p>
          Qui puoi inserire una breve biografia. Parla della tua passione per lo
          sviluppo web, del tuo percorso di apprendimento e delle tue
          aspirazioni professionali. Puoi anche menzionare alcuni dei tuoi
          interessi al di fuori della programmazione.
        </p>
        <p>
          Ricorda di personalizzare questo testo per riflettere la tua
          personalità e le tue esperienze uniche.
        </p>
        <div class="mt-4">
          <h4>Educazione</h4>
          <ul>
            <li>Corso Fullstack Developer Jr - Nome dell'istituto, Anno</li>
            <li>Altri corsi o certificazioni rilevanti</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style lang="scss" scoped>
.about {
  img {
    border: 5px solid $primary;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
