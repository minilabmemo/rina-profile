<template>
  <div class="circle-mask">
    <img :src="src" alt="Your Image" class="circle-image">
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  src: String
});
</script>

<style scoped>
.circle-mask {
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

}

.circle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
