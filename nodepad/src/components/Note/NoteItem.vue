<template>
	<v-card>
		<v-toolbar
			color="primary"
			dark
		>{{ title }}</v-toolbar>
		<v-card-text>
			<div>{{ content }}</div>
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
	private get title(): string {
		return this.$store.state.selectedListItem.title;
	}

	private get content(): string{
		return this.$store.state.selectedListItem.content;
	}

	private closeDialog(): void{
		this.$emit('close-dialog');
	}
}
</script>
<style scoped>

</style>