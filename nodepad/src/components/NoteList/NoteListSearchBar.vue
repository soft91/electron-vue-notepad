<template>
	<v-text-field
		v-model="search"
		label="Search"
		prepend-inner-icon="mdi-magnify"
		single-line
		hide-details
		clearable
		@click:clear="clearSearch"
	></v-text-field>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NoteListSearchBar extends Vue {
	set search(value: string) {
		this.$store.commit('serachListItem', value);
	}

	get search(): string {
		return this.$store.state.search;
	}

  private clearSearch(): void {
    this.$store.commit('serachListItem', '');
  }
}
</script>
<style scoped>

</style>