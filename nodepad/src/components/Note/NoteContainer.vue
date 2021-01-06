<template>
  <v-container
    id="note-container"
  >
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/Logo.png')"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Whatever Pad
        </h1>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Ref } from 'vue-property-decorator'

import { IVForm } from '@/Types'

@Component
export default class NoteContainer extends Vue {
  @Ref("form") readonly form!: IVForm;
  private title: string = '';
  private content: string = '';
  private valid: boolean = false;

  private formData: object = {};

  private validate(): void{
    // Form 유효성 검사
    if(!this.form.validate()) return;
    
    const data = {
      title: this.title,
      subtitle: null,
      content: this.content
    }; 

    this.$store.commit('insertListItem', data);
    this.reset();
    this.$emit('close-dialog');
  }
  
  private reset(): void {
    this.form.reset();
  }
}
</script>

<style scoped>
  #note-container {
    background-color: #FFFFFF;
  }
</style>