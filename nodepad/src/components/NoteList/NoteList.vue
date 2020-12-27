<template>
  <v-container>
    <v-text-field
      v-model="search"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      single-line
      hide-details
      clearable
      @click:clear="clearSearch"
    ></v-text-field>
    <v-list-item-group
      class="list-group"
    >
    <template v-for="(value, index) in filteredItems" >
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
        v-if="index < dummyData.length - 1"
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
  private search: string = '';
  private dummyData: Array<object> = [
    {
      action: '15 min',
      headline: 'Brunch this weekend?',
      subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      title: 'Ali Connors',
    },
    {
      action: '2 hr',
      headline: 'Summer BBQ',
      subtitle: `Wish I could come, but I'm out of town this weekend.`,
      title: 'me, Scrott, Jennifer',
    },
    {
      action: '6 hr',
      headline: 'Oui oui',
      subtitle: 'Do you have Paris recommendations? Have you ever been?',
      title: 'Sandra Adams',
    },
    {
      action: '12 hr',
      headline: 'Birthday gift',
      subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
      title: 'Trevor Hansen',
    },
    {
      action: '18hr',
      headline: 'Recipe to try',
      subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      title: 'Britta Holt',
    },
  ]

  get filteredItems() {
    return this.dummyData.filter((item: any) => {
      if(!this.search) return this.dummyData;
      return item.title.toLowerCase().match(this.search)  || 
             item.headline.toLowerCase().match(this.search) || 
             item.subtitle.toLowerCase().match(this.search)
    })
  }

  public clearSearch(): void {
    this.search = '';
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
