<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid ">
      <RouterView />
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {Navbar},
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)defToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    );

    this.axios.defaults.headers.common['Authorization'] = token
    const url = `${import.meta.env.VITE_API}/${import.meta.env.VITE_PATH}/api/user/check`
    console.log("login", url)
    this.axios.post(url, this.user).then((response) => {
      console.log(response.data)
      if (!response.data.success) {
        this.$router.push('/login')
      }

    })
  },
}
</script>
