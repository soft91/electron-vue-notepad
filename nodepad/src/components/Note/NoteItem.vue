<template>
	<v-card>
		<v-toolbar
			color="primary"
			dark
		>{{ headline }}</v-toolbar>
		<v-card-text>
			<div>{{ title }}</div>
		</v-card-text>
		<v-card-actions class="justify-end">
			<v-btn
				text
				@click="closeDialog"
			>Close</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator' 

@Component
export default class NoteItem extends Vue {
	private get headline(): string{
		return this.$store.state.selectedListItem.headline;
	}

	private get title(): string {
		return this.$store.state.selectedListItem.title;
	}

	private closeDialog(): void{
		this.$emit('close-dialog');
	}
}
</script>
<style scoped>

</style>