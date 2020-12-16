<template>
  <v-app>
    <v-app-bar
      app
      height="40px"
      color="#3B3B3B"
    >
      <div id="title-bar-btns" class="d-flex align-center">

      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
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
