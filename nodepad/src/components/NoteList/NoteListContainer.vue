<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <NoteList/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import NoteList from '@/components/NoteList/NoteList.vue'

@Component({
  components: {
    NoteList
  }
})
export default class NoteListContainer extends Vue {
  
}
</script>
