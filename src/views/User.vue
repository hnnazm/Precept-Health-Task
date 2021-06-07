<template>
  <div class="about">
    <h1>Users</h1>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="user in users"
          :key="user.id"
        >
          <v-card
            class="my-2"
            width="100%"
            min-width="300"
            max-width="300"
          >
            <v-sheet
              color="grey lighten-4"
              class="pa-4 d-flex justify-center"
            >
              <v-avatar
                class="mb-4"
                color="white darken-1"
                width="128"
                height="128"
              >
                <img src="@/assets/user-dummy.png" alt="Profile picture">
              </v-avatar>
            </v-sheet>

            <div class=user-card-text>
              <v-card-title>
                {{ user.first_name }} {{ user.last_name}}
              </v-card-title>

              <v-card-subtitle>
                {{ user.email }}
              </v-card-subtitle>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data: () => ({
      users: [],
    }),
    async created() {
      const response = await fetch(`${this.$store.state.BASE_URL}/users`, {
        method: 'GET',
        headers: {
          "authorization": this.$store.state.user.access_token
        },
        credentials: "same-origin"
      })
      const data = await response.json()
      this.users = data[0]
    }
  })
</script>
