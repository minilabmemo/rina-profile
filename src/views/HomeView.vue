<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <h1>Router</h1>
    <router-link to="./about">go about page</router-link>
  </main>
</template>
