<script setup>
import NavigationDrawer from '../../components/NavigationDrawer.vue';
</script>
<template>
    <v-layout class="rounded rounded-md">

        <NavigationDrawer/>
      <v-app-bar title="Application bar"></v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        Main Content
      </v-main>
    </v-layout>
  </template>
