<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          class="note-container"
        >
          <NoteContainer/>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <NoteListContainer/>
        </v-col>
      </v-row>
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
  .app-main {
    padding: 12px;
  }

  .add-button {
    display: none;
    position:fixed;
    bottom:40px;
    right:40px;
  }

  @media screen and (max-width: 850px){
    .note-container {
      display: none;
    }

    .add-button {
      display: inline-flex;
    }
  }
</style>
