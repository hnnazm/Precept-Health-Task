<template>
  <v-app>
    <v-app-bar
    color="blue"
    height="200"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-h1 white--text">Precept Health</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
    <div class="card-wrapper">
    <v-card
    id="login-card"
    class="mx-auto"
    max-width="70vw"
    outlined
    >
      <v-form
      ref="form"
      lazy-validation
      >
      <h2 class="text-center mb-5">Login</h2>
      <p class="font-weight-black pl-2">
        E-mail
      </p>
      <v-text-field
        v-model="email"
        solo
        hint="example: smith@email.com"
        required
      ></v-text-field>

      <p class="font-weight-black pl-2">
        Password
      </p>
      <v-text-field
        v-model="password"
        solo
        required
        type="password"
      ></v-text-field>

      <v-btn
        :disabled="isValid"
        color="success"
        class="mr-4"
        @click="login"
      >
        Login
      </v-btn>
      </v-form>
    </v-card>
    </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data: () => ({
      email: '',
      password: '',
    }),
    computed: {
      isValid() {
        return this.email && this.password ? false : true
      },
    },
    methods: {
      login() {
        let email = this.email
        let password = this.password

        this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push({ name: 'Home' }))
          .catch(err => console.log(err))
      }
    },
  })
</script>

<style scoped>
  .card-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
  }

  #login-card {
    width: 100%;
    padding: 2em;
  }
</style>
