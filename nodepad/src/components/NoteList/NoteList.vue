<template>
  <v-container>
    <v-list-item 
      v-for="index in 10"
      :key="index"
      three-line
      >
      <v-list-item-content class="list-container">
        <v-list-item-title class="list-title">Three-line item</v-list-item-title>
        <v-list-item-subtitle class="list-sub-title">
          Secondary line text Lorem ipsum dolor sit amet,
        </v-list-item-subtitle>
        <v-list-item-content class="list-content">
          consectetur adipiscing elit.
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NoteList extends Vue {
  
}
</script>

<style scoped>
  .list-container {
    text-align: left;
  }
  .list-title {
    font-size: 14pt;
    font-weight: bold;
  }
  .list-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
