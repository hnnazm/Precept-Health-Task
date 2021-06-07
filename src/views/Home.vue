<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        >
          <img src="@/assets/user.jpeg" alt="Profile picture">
        </v-avatar>

        <div>{{ user.user.email }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, link] in links"
          :key="icon"
          :to="{ name: link }"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer>
      <small id="footer">{{ new Date().getFullYear() }} — <strong>Hannan Azmi (Precept Health Test)</strong></small>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'

  export default Vue.extend({
    name: 'Home',
    computed: {
      ...mapState(['user'])
    },
    data: () => ({
      drawer: null,
      links: [
        ['mdi-server', 'Model Type', 'ModelType'],
        ['mdi-plus', 'Add Device Model', 'DeviceModel'],
        ['mdi-account', 'User', 'User'],
        ['mdi-information', 'About', 'About'],
      ],
    }),
    components: {
    },
  })
</script>

<style scoped>
  .v-footer {
    justify-content: center;
  }
</style>
