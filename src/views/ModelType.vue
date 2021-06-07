<template>
  <div>
    <h1 class="mb-3">Model Type</h1>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="modelType"
        :search="search"
        @click:row="showDialog"
        :headers-length="300"
        :loading=loading
        :items-per-page="14"
        class="elevation-1"
        fixed-header
      >
      </v-data-table>
    </v-card>
    <v-dialog
      v-model="dialogVisibility"
      max-width="70vw"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{ currentDialogItem.BrandId }} {{ currentDialogItem.Name }}
        </v-card-title>

        <v-card-text>
          <DataTable :nested="false" :nestedData="modelData"/>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogVisibility = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script lang="ts">
  import DataTable from '@/components/DataTable.vue'
  import Vue from 'vue'

  interface Value {
    BrandId: number,
    Name: string
  }

  export default Vue.extend({
    name: 'ModelType',
    components: {
      DataTable
    },
    data: () => ({
      search: '',
      loading: false,
      dialogVisibility: false,
      currentDialogItem: {},
      modelType: [],
      modelData: [],
      headers: [
          {
            text: 'No',
            align: 'start',
            sortable: true,
            value: 'Id',
          },
          { text: 'Brand', sortable: true, value: 'BrandId' },
          { text: 'Name', sortable: true, value: 'Name' },
          { text: 'Comment', value: 'Comment' },
          { text: 'Description', value: 'Description' },
        ],
    }),
    async created() {
      this.loading = true
      const response = await fetch(`${this.$store.state.BASE_URL}/overview/modeltype`, {
        method: 'GET',
        headers: {
          "authorization": this.$store.state.user.access_token
        },
        credentials: "same-origin"
      })
      const data = await response.json()
      this.modelType = data
      this.loading = false
    },
    methods: {
      getModelData: async function(value: Value) {
        const response = await fetch(`${this.$store.state.BASE_URL}/overview/modeldata/${value.BrandId}/${value.Name}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "authorization": this.$store.state.user.access_token
          },
          credentials: "same-origin"
        })
        const data = await response.json()
        this.modelData = data
      },
      async showDialog(value: Value) {
        this.dialogVisibility = true
        this.currentDialogItem = value
        this.getModelData(value)
      }
    }
  })
</script>

<style>

</style>
