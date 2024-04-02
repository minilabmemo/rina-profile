<template>
  <main>
    <TheWelcome />
    <h1>Router</h1>

    <h2>練習</h2>
    <div><router-link to="./about">go about page</router-link></div>
    <h2>bootstrap 練習</h2>
    <div> <router-link to="./row">bootstrap 格線系統</router-link></div>

    <h2>pinia 練習</h2>
    <div> <router-link to="./pinia/about/option">go pinia about [option]</router-link></div>
    <div> <router-link to="./pinia/about">go pinia about page</router-link></div>

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