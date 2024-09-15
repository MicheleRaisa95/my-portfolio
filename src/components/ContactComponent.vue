<template>
  <div class="contact container mt-5 mb-5">
    <h2 class="text-center mb-5">Contattami</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="form.name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="form.email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Messaggio</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              v-model="form.message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Invia</button>
        </form>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-4 text-center">
        <i class="fas fa-envelope fa-2x mb-3"></i>
        <p>email@example.com</p>
      </div>
      <div class="col-md-4 text-center">
        <i class="fas fa-phone fa-2x mb-3"></i>
        <p>+39 123 456 7890</p>
      </div>
      <div class="col-md-4 text-center">
        <i class="fas fa-map-marker-alt fa-2x mb-3"></i>
        <p>La tua città, Italia</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Qui puoi aggiungere la logica per l'invio del form
      console.log("Form submitted:", this.form);
      // Resetta il form dopo l'invio
      this.form = { name: "", email: "", message: "" };
      // Qui potresti aggiungere un alert o un messaggio di conferma
      alert("Messaggio inviato! Grazie per avermi contattato.");
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  i {
    color: $primary;
  }
}
</style>
