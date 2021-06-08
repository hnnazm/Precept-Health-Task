<template>
  <div>
    <h2>Add Device Model</h2>
    <v-form
    ref="form"
    lazy-validation
    >
      <v-text-field
        v-model="brand"
        label="Device Brand"
        required
      ></v-text-field>

      <v-text-field
        v-model="name"
        label="Device Name"
        required
      ></v-text-field>

      <v-select
        v-model="typeSelect"
        :items="typeObj"
        label="Device Type"
        required
      ></v-select>

      <v-text-field
        v-model="comment"
        label="Additional description"
      ></v-text-field>

      <v-btn
        :disabled="isValid"
        color="success"
        class="mr-4"
        @click="addDeviceModel"
      >
        Add
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Clear Form
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  interface DeviceTypeInterface {
    text: number,
    value: string
  }

  export default Vue.extend({
    data: () => ({
      brand: '',
      name: '',
      typeSelect: null,
      comment: '',
      typeObj: [] as DeviceTypeInterface[]
    }),
    computed: {
      isValid() {
        if (this.brand && this.name && this.typeSelect && this.comment) return false
        else return true
      }
    },
    async created() {
      const response = await fetch(`${this.$store.state.BASE_URL}/devicetype`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "authorization": this.$store.state.user.access_token
        },
        credentials: "same-origin"
      })
      const data = await response.json()

      for (let item of data[0]) {
        const temp_item = {
          text: item.Description,
          value: item.Id
        }
        console.log(temp_item)
        this.typeObj.push(temp_item)
      }
    },
    methods: {
      reset() {
        this.brand = ''
        this.name = ''
        this.typeSelect = null
        this.comment = ''
      },
      async addDeviceModel() {
        await fetch(`${this.$store.state.BASE_URL}/devicemodel`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "authorization": this.$store.state.user.access_token
          },
          body: JSON.stringify({
            BrandId: this.brand,
            Name: this.name,
            TypeId: this.typeSelect,
            Comment: this.comment
          }),
          credentials: "same-origin"
        })
        this.reset()
      }
    },
  })
</script>
