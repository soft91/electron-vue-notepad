<template>
  <v-container>
    <v-list-item-group
      class="list-group"
    >
    <template v-for="(value, index) in listItems">
      <v-list-item
        :key="value.title"
        three-line
      >
        <v-list-item-content class="list-container">
          <v-list-item-title class="list-title">{{ value.headline }}</v-list-item-title>
          <v-list-item-subtitle class="list-sub-title">
            {{ value.subtitle }}
          </v-list-item-subtitle>
          <v-list-item-content class="list-content">
            {{ value.title }}
          </v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-divider
        v-if="index < listItems.length - 1"
        :key="index"
      ></v-divider>
      </template>
    </v-list-item-group>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NoteList extends Vue {
  get listItems() {
    return this.$store.getters.filteredItems;
  }
}
</script>

<style scoped>
  .list-group {
    margin-top: 20px;
  }
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
