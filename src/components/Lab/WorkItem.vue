<template>
  <div class="d-fex justify-content-center ">
    <div class="text-ps-orange"></div> {{ item.date }}
  </div>
</template>



<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  item: {
    id: number;
    date: string;
    title: string;
    tags: string[];
    details: string[];
  };
}>();

console.log('title', props.item.title);

</script>