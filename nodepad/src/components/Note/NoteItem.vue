<template>
	<v-card>
		<v-toolbar
			dark
		>{{ title }}</v-toolbar>
		<v-card-text class="content">
			<div>{{ content }}</div>
		</v-card-text>
		<v-card-actions class="justify-end">
			<v-btn 
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
	.v-dialog > .v-card > .v-card__text {
		padding: 10px 20px;
		font-size: 1rem;
	}
</style>