<template>
  <div>
    ddd
  </div>
</template>

<script>
export default {
  created() {
    const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)defToken\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);

this.axios.defaults.headers.common['Authorization']=token
const url=`${import.meta.env.VITE_API}/${import.meta.env.VITE_PATH}/api/user/check`
			console.log("login",url)
			this.axios.post(url,this.user).then((response) => {
		
        console.log(response.data)
      })
  },
}
</script>