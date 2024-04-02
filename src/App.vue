<script setup lang="ts">

import { onMounted } from 'vue'

onMounted(() => {
  console.log(import.meta.env.VITE_API)
})
</script>



<template>

  <RouterView />
</template>
