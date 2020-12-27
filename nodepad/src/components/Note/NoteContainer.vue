<template>
  <v-container
    id="note-container"
  >
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/Logo.png')"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Whatever Pad
        </h1>
        <NoteForm/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import NoteForm from '@/components/Note/NoteForm.vue'

@Component({
  components: {
    NoteForm
  }
})
export default class NoteContainer extends Vue {
  
}
</script>

<style scoped>
  #note-container {
    background-color: #FFFFFF;
  }
</style>