<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const visible = ref(false)
</script>


<template>
    <div class="mt-8">
      <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
      ></v-img>

      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          color="primary"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a>
        </div>

        <v-text-field
          color="primary"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ?
          'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-card

          color="surface-variant"
          variant="tonal"
        >

        </v-card>

        <v-btn

          class="mb-8"
          color="primary"
          size="large"
          variant="flat"
          block
        >
          Log In
        </v-btn>

        <v-card-text class="text-center">
        <router-link to="/register" class="text-blue text-decoration-none"> Sign up now <v-icon icon="mdi-chevron-right"></v-icon></router-link>



        </v-card-text>
      </v-card>
    </div>
  </template>
