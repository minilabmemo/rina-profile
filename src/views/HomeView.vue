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


<script>
export default {
  created() {
    //查看環境變數，本地跟部屬不同
    console.log("VITE_API", import.meta.env.VITE_API)
    console.log("BASE_URL", import.meta.env.BASE_URL)
  },
}
</script>