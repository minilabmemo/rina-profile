<template>
  <div class="card-container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div :style="cardStyle" class="card d-flex flex-column align-items-center justify-content-center p-3 work-item m-3">
      <div class="text-primary fw-bolder fs-5">{{ item.date }}</div>
      <div class="bg-primary title-line" style="height: 5px"></div>
      <div class="content-item mt-1 p-3 d-flex flex-column align-items-center">
        <div class="text-black fs-4 fw-bolder my-2">{{ item.title }}</div>
        <div class="" style="max-width: 200px">
          <img :src="item.img" alt="work" class="flex-image" />
        </div>
        <div class="d-flex flex-wrap align-items-center gap-1 my-3" style="min-height: 3rem">
          <span style="min-width: 3rem" :class="tagColor(tag)" class="px-2 fw-bolder text-white text-center"
            v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>

        <div class="align-self-start fw-bolder" style="min-height: 5.2rem">
          <ul>
            <li class="" v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
          </ul>
        </div>
        <div class="w-100 d-flex justify-content-evenly mt-1 fs-5 fw-bolder gap-1">
          <span class="nav-link" v-if="item.website">
            <a :href="item.website" class="text-secondary" target="_blank">
              <i class="bi bi-globe"></i> website</a>
          </span>
          <span class="">
            <a :href="item.repository" class="text-secondary" target="_blank">
              <i class="bi bi-github"></i>
              repository</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { tagColors } from '@/utils/config/works'
import type { Iwork } from '@/utils/config/works'

const props = defineProps<{
  item: Iwork
}>()

function tagColor(tag: string): string {
  tag = tag.toLowerCase().replace(' ', '')
  if (tag in tagColors) {
    return tagColors[tag]
  } else {
    return 'bg-gray'
  }
}
const cardStyle = ref({
  transform: 'rotateY(0deg) rotateX(0deg)'
})
function handleMouseMove(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const halfWidth = rect.width / 2
  const halfHeight = rect.height / 2
  const rotateX = ((y - halfHeight) / halfHeight) * 8
  const rotateY = ((x - halfWidth) / halfWidth) * 8

  cardStyle.value = {
    transform: `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`
  }
}

function handleMouseLeave() {
  cardStyle.value = {
    transform: 'rotateY(0deg) rotateX(0deg)'
  }
}
</script>

<style lang="css" scoped>
.card-container {
  perspective: 1000px;
}

.card {
  box-shadow: 0 10px 20px rgba(255, 206, 174, 0.2);
  border: 2px solid var(--bs-orange-900);
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
}

.card::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  right: 0;
  bottom: 0;
  background: var(--bs-orange-500);
  border-radius: inherit;
  box-shadow: 0 0 0 2px var(--bs-orange-900);
  transform: translate3d(0, 0.75em, -1em);
  transition:
    transform 150ms cubic-bezier(0, 0, 0.58, 1),
    box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

.img-container {
  overflow: hidden;
}

.work-item {
  background-color: var(--bs-red-100);
}

.title-line {
  transition: width 0.5s ease-in;
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
