<template>
  <div class="d-flex flex-column align-items-center  justify-content-center p-3 work-item m-3">
    <div class="text-primary fw-bolder fs-5 ">{{ item.date }}</div>
    <div class="bg-primary  title-line " style="height: 5px;"></div>
    <div class=" content-item mt-1 p-3 d-flex flex-column align-items-center ">
      <div class="text-black fs-4 fw-bolder my-2  ">{{ item.title }}</div>
      <div class="" style="max-width: 200px"> <img :src="getImage(item.img)" alt="work" class="flex-image ">
      </div>
      <div class="d-flex   flex-wrap align-items-center   gap-2 my-3 " style="height: 3rem">
        <span style="min-width: 3rem" :class="tagColor(tag)" class="px-2  fw-bolder text-white text-center "
          v-for="tag in item.tags" :key="tag">{{ tag }}</span>
      </div>

      <div class="align-self-start fw-bolder " style="height: 5.2rem">
        <ul>
          <li class="" v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
        </ul>
      </div>
      <div class="w-100 d-flex justify-content-evenly     mt-1 fs-5 fw-bolder ">
        <span class="nav-link" v-if="item.website"> <a :href="item.website" class="text-secondary " target="_blank"> <i
              class="bi bi-globe"></i>
            website</a> </span>
        <span class=""> <a :href="item.repository" class="text-secondary" target="_blank">
            <i class="bi bi-github"></i>
            repository</a>
        </span>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { defineProps } from 'vue';
import { tagColors } from '@/utils/config/works'
import type { Iwork } from '@/utils/config/works';

const props = defineProps<{
  item: Iwork;
}>();

function tagColor(tag: string): string {
  tag = tag.toLowerCase()
  if (tag in tagColors) {
    return tagColors[tag];
  } else {
    return 'bg-gray';
  }
}
function getImage(imgLoc: string): string {
  const imageUrl: string = new URL(imgLoc, import.meta.url).href
  return imageUrl

}


</script>


<style lang="css" scoped>
.img-container {
  overflow: hidden;

}

.work-item {
  background-color: var(--bs-red-100);
}

.work-item:hover {
  background-color: var(--bs-red-200);
}

.title-line {
  transition: width .5s ease-in;
  width: 0px;
}

.work-item:hover .title-line {
  width: 100px;
}


.work-item:hover img {
  transform: scale(1.1);
}

.flex-image {
  object-fit: contain;
  aspect-ratio: 3/2;
  width: 100%;
  height: auto;
}
</style>