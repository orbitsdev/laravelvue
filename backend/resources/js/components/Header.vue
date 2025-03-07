<script setup>
    const items = [
      { title: 'Profile' },
      { title: 'Logout' },
      { title: 'Settings' },
    ]
</script>

<template>

     <RouterLink to="/login">Go to Home</RouterLink>
    <RouterLink to="/register">Go to About</RouterLink>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Profile
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

</template>
