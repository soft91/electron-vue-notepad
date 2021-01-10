<template>
  <v-container>
    <v-list-item-group
      class="list-group"
    >
    <template v-for="(value, index) in listItems">
      <v-list-item
        :key="value.action"
        three-line
        @click="showDialog(index)"
      >
        <v-list-item-content class="list-container">
          <v-list-item-title class="list-title">{{ value.title }}</v-list-item-title>
          <v-list-item-subtitle class="list-sub-title">
            {{ value.subtitle }}
          </v-list-item-subtitle>
          <v-list-item-content class="list-content">
            {{ value.content }}
          </v-list-item-content>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn 
            icon
            @click.stop="editListItem(index)"
          >
            <v-icon
              color="green darken-2"
            >
              mdi-square-edit-outline
            </v-icon>
          </v-btn>
          <v-btn
            icon
            @click.stop="deleteListItem(index)"
          >
            <v-icon
              color="red darken-2"
            >
              mdi-delete
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider
        v-if="index < listItems.length - 1"
        :key="index"
      ></v-divider>
      </template>
    </v-list-item-group>
    <v-dialog
		  transition="dialog-bottom-transition"
      v-model="dialog"
      max-width="600"
    >
      <NoteItem @close-dialog="dialog = !dialog"/>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import NoteItem from '@/components/Note/NoteItem.vue'

@Component({
  components: { NoteItem }
})
export default class NoteList extends Vue {
  private dialog: boolean = false;
  private selectedIndex: number = 0;

  private get listItems(): Array<object> {
    return this.$store.getters.filteredItems;
  }

  private showDialog(index: number): boolean {
    this.$store.commit('getListItem', this.$store.state.dummyData[index]);
    return this.dialog = !this.dialog;
  }

  private editListItem(index: number) {
    console.log('update test');
    //return this.dialog = !this.dialog;
  }

  private deleteListItem(index: number) {
    console.log('delete test')
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
