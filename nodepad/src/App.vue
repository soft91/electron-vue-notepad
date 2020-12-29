<template>
  <v-app>
    <v-container>
      <NoteListContainer/>
      <v-btn
        class="add-button"
        fab
        dark
        color="indigo"
        @click="dialog = !dialog"
      >
        <v-icon dark>
          mdi-pencil
        </v-icon>
      </v-btn>
      <v-dialog
        v-model="dialog"
        width="400"
      >
        <NoteContainer/>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NoteContainer from '@/components/Note/NoteContainer.vue';
import NoteListContainer from '@/components/NoteList/NoteListContainer.vue';

@Component({
  components: {
    NoteContainer,
    NoteListContainer
  }
})
export default class App extends Vue { 
  private dialog: boolean = false;
}
</script>
<style scoped>
  .add-button {
    position:fixed;
    bottom:40px;
    right:40px;
  }
</style>
