<template>
  <v-container>
    <NoteListSearchBar/>
    <NoteList/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import NoteListSearchBar from '@/components/NoteList/NoteListSearchBar.vue'
import NoteList from '@/components/NoteList/NoteList.vue'

@Component({
  components: {
    NoteList,
    NoteListSearchBar
  }
})
export default class NoteListContainer extends Vue {
  
}
</script>
