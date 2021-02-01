<template>
	<v-card>
		<v-toolbar
			dark
		>
		  <v-text-field
				v-model="title"
				dense
			></v-text-field>	
		</v-toolbar>
		<v-card-text>
			<v-textarea
				solo
				name="input-7-4"
				height="550"
				v-model="content"
			></v-textarea>
		</v-card-text>
	</v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator' 

@Component
export default class NoteItem extends Vue {

	private set title(value: string) {
		this.$store.state.selectedListItem.title = value;
	}

	private get title(): string {
		return this.$store.state.selectedListItem.title;
	}

	private set content(value: string) {
		this.$store.state.selectedListItem.content = value;
	}

	private get content(): string {
		return this.$store.state.selectedListItem.content;
	}
}
</script>
<style scoped>
	.v-dialog > .v-card > .v-card__text {
		padding: 10px 20px;
		font-size: 1rem;
	}
</style>