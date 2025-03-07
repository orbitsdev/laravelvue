<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';

const loading = ref(false);


</script>

<template>




    <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar">
        <Header/>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <RouterView />




    </v-main>
  </v-layout>



</template>
