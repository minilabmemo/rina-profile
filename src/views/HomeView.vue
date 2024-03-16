<template>
  <main>
    <TheWelcome />
    <h1>Router</h1>
    <router-link to="./about">go about page</router-link>
  </main>
</template>


<script>
import TheWelcome from '../components/TheWelcome.vue'
export default {
  components: {TheWelcome},
  created() {
    //查看環境變數，本地跟部屬不同
    console.log("NODE_ENV", import.meta.env.NODE_ENV)
    console.log("VITE_API", import.meta.env.VITE_API)
    console.log("BASE_URL", import.meta.env.BASE_URL)
  },
}
</script>