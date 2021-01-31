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
				:value="content"
			></v-textarea>
		</v-card-text>
		<v-card-actions class="justify-end">
			<v-btn
				color="success"
				@click="updateNote"
			>
				<v-icon left>
					mdi-pencil
				</v-icon>
				Edit
			</v-btn>
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
	private set title(value: string) {
		this.$store.commit('selectedListItem', value);
	}

	private get title(): string {
		return this.$store.state.selectedListItem.title;
	}

	private set content(value: string) {
		this.$store.commit('selectedListItem', value);
	}

	private get content(): string {
		return this.$store.state.selectedListItem.content;
	}

	private updateNote(): void {
		this.closeDialog();
	}

	private closeDialog(): void {
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