<template>
  <div class="card-container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div :style="cardStyle" class="card work-item m-3">
      <!-- Header Section: 日期標籤 -->
      <div class="project-header">
        <span class="date-badge">{{ item.date }}</span>
      </div>

      <!-- Content Section -->
      <div class="project-content">
        <!-- Title Section: 專案標題 -->
        <h3 class="project-title">{{ item.title }}</h3>
        <div class="bg-primary title-line"></div>

        <!-- Preview Section: 專案預覽圖 -->
        <div class="project-preview">
          <img :src="item.img" alt="work" class="flex-image" />
        </div>

        <!-- Tech Stack Section: 技術標籤 -->
        <div class="tech-stack">
          <span :class="tagColor(tag)" class="tag-item" v-for="tag in item.tags" :key="tag">{{
            tag
          }}</span>
        </div>

        <!-- Description Section: 專案描述 -->
        <div class="project-description">
          <ul class="feature-list">
            <li v-for="(detail, i) in item.details" :key="i" class="feature-item">
              <i class="bi bi-check-circle-fill"></i>
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>

        <!-- Action Section: 外部連結 -->
        <div class="project-actions">
          <a v-if="item.website" :href="item.website" class="action-btn primary" target="_blank">
            <i class="bi bi-globe"></i>
            <span>Website</span>
          </a>
          <a :href="item.repository" class="action-btn secondary" target="_blank">
            <i class="bi bi-github"></i>
            <span>Repository</span>
          </a>
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
  position: relative;
  display: flex;
  flex-direction: column;
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

.tag-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.6rem;
  font-size: 0.625rem;
  font-weight: 600;
  color: white;
  text-align: center;
  border-radius: 0.75rem;
  min-width: 2.5rem;
  height: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.tag-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.tag-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.tag-item:hover::before {
  left: 100%;
}

/* === 優化後的區塊樣式 === */

/* Header Section: 日期標籤 */
.project-header {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;
}

.date-badge {
  background: var(--bs-primary);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  font-size: 0.625rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1;
}

/* Content Section */
.project-content {
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
}

/* Title Section: 專案標題 */
.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--bs-dark);
  text-align: center;
  margin: 0;
  line-height: 1.3;
}

.title-line {
  height: 3px;
  width: 0;
  transition: width 0.5s ease-in-out;
  margin: 0.5rem 0;
}

.work-item:hover .title-line {
  width: 60px;
}

/* Preview Section: 專案預覽圖 */
.project-preview {
  width: 100%;
  max-width: 200px;
  overflow: hidden;
  border-radius: 0.5rem;
}

/* Tech Stack Section: 技術標籤 */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.375rem;
  align-items: center;
  max-width: 280px;
  margin: 0 auto;
  line-height: 1.2;
}

/* Description Section: 專案描述 */
.project-description {
  width: 100%;
  min-height: 4rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.4;
}

.feature-item i {
  color: var(--bs-success);
  font-size: 0.75rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

.feature-item span {
  color: var(--bs-dark);
}

/* Action Section: 外部連結 */
.project-actions {
  display: flex;
  gap: 0.75rem;
  width: 100%;
  justify-content: center;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  flex: 1;
  justify-content: center;
  max-width: 120px;
}

.action-btn.primary {
  background: var(--bs-primary);
  color: white;
}

.action-btn.primary:hover {
  background: var(--bs-primary);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(var(--bs-primary-rgb), 0.3);
}

.action-btn.secondary {
  background: var(--bs-secondary);
  color: white;
}

.action-btn.secondary:hover {
  background: var(--bs-secondary);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(var(--bs-secondary-rgb), 0.3);
}

.action-btn i {
  font-size: 1rem;
}

/* === 統一的標籤顏色系統 === */
.tag-green {
  background: #059669 !important; /* emerald-600 */
}

.tag-blue {
  background: #2563eb !important; /* blue-600 */
}

.tag-teal {
  background: #0891b2 !important; /* cyan-600 */
}

.tag-purple {
  background: #9333ea !important; /* purple-600 */
}

.tag-pink {
  background: #db2777 !important; /* pink-600 */
}

.tag-yellow {
  background: #ca8a04 !important; /* yellow-600 */
}

.tag-orange {
  background: #ea580c !important; /* orange-600 */
}

.tag-indigo {
  background: #4f46e5 !important; /* indigo-600 */
}

.tag-cyan {
  background: #0891b2 !important; /* cyan-600 */
}

.tag-black {
  background: #374151 !important; /* gray-700 */
}

.tag-gray {
  background: #6b7280 !important; /* gray-500 */
}
</style>
