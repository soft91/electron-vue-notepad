<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <NoteContainer/>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col>
            <NoteListContainer/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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

}
</script>
<style scoped>
</style>
