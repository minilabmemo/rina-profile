<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
// created() {
//   console.log(import.meta.env.VITE_API)
// },
onMounted(() => {
  console.log(import.meta.env.VITE_API)
})
</script>



<template>

  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    -->
  <!-- <HelloWorld msg="You did it!" /> -->
  <!-- <button type="button" class="btn btn-primary">Primary</button> -->

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/about">About</RouterLink>|
        <RouterLink to="/login">Login</RouterLink>
      </nav> -->
  <RouterView />
</template>
