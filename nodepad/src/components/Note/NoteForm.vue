<template>
	<v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="title"
        :rules="[v => !!v || 'Title is required']"
        label="Title"
        required
      ></v-text-field>

      <v-textarea
        v-model="content"
        label="Content"
        :rules="[v => !!v || 'Content is required']"
        auto-grow
        required
      ></v-textarea>
      <v-btn
        color="success"
        class="mr-4"
        @click="validate"
      >
        Submit
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
    </v-form>
	</v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NoteForm extends Vue {

  validate(): void{
    this.$refs.form.validate()
  }
  reset(): void {
    this.$refs.form.reset()
  }
}
</script>