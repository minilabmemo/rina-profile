<template>
  <div>
    {{ name }} {{ getUserName }}
    <button type="button" @click="updateName">update</button>
  </div>
</template>



<script>
import useUserStore from '@/stores/user'
import {mapState, mapActions} from 'pinia'
export default {
  computed: {
    ...mapState(useUserStore, ['name', 'getUserName'])
  },
  methods: {
    ...mapActions(useUserStore, ['updateName'])
  },
}
</script>