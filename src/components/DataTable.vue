<template>
  <div>
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
        :items="nestedData"
        :search="search"
        @click:row="showDialog"
        :loading=loading
        :items-per-page="5"
        fixed-header
        class="elevation-1"
      >
      </v-data-table>
    </v-card>
    <v-dialog
      v-if="nested"
      v-model="dialogVisibility"
      max-width="70vw"
    >
      <v-card>
        <v-card-title class="text-h5"></v-card-title>

        <v-card-text></v-card-text>

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
  import Vue from 'vue'

  interface Value {
    BrandId: number,
    Name: string
  }

  export default Vue.extend({
    name: 'DataTable',
    props: {
      nested: Boolean,
      nestedData: Array,
    },
    data: () => ({
      search: '',
      loading: false,
      dialogVisibility: false,
      currentDialogItem: {},
      headers: [
          {
            text: 'No',
            align: 'start',
            sortable: true,
            value: 'Id',
          },
          { text: 'Name', sortable: true, value: 'Name' },
          { text: 'Display Name', sortable: true, value: 'DisplayName' },
          { text: 'Description', value: 'Description' },
          { text: 'Status', value: 'Status' },
          { text: 'Group ID', value: 'GroupId' },
          { text: 'Protocol Order', value: 'ProtocolOrder' },
        ],
    }),
    methods: {
      showDialog: function(value: Value) {
        this.dialogVisibility = true;
        this.currentDialogItem = value;
      }
    }
  })
</script>

<style>

</style>
