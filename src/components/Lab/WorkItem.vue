<template>
  <!-- Work Item Card -->
  <div class="card-container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div :style="cardStyle" class="card work-item m-3">
      <!-- Header Section: 日期標籤 -->
      <div class="project-header">
        <span class="date-badge">{{ item.date }}</span>
      </div>

      <!-- Content Section -->
      <div class="project-content">
        <!-- Title Section: 專案標題 -->
        <h3 class="project-title">
          {{ item.title }}
          <div class="bg-primary title-line"></div>
        </h3>

        <!-- Preview Section: 專案預覽圖 -->
        <div
          class="project-preview"
          :class="{ 'has-video': item.videos && item.videos.length > 0 }"
        >
          <img :src="item.img" alt="work" class="flex-image" />
          <div
            v-if="item.videos && item.videos.length > 0"
            class="preview-overlay"
            @click="openModal"
          >
            <div class="preview-btn">
              <i class="bi bi-play-circle-fill"></i>
              <span>觀看展示</span>
            </div>
          </div>
          <!-- 吸引注意的小圖示 -->
          <div v-if="item.videos && item.videos.length > 0" class="preview-hint">
            <i class="bi bi-play-fill"></i>
          </div>
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
              <span v-html="detail"></span>
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

  <!-- Modal: 詳細資訊彈窗 -->
  <Teleport to="body">
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <button class="modal-close" @click="closeModal">
          <i class="bi bi-x-lg"></i>
        </button>

        <div class="modal-content">
          <!-- 上方: 時間和標題 -->
          <div class="modal-header">
            <div class="header-content">
              <span class="modal-date-badge">{{ item.date }}</span>
              <h2 class="modal-title">{{ item.title }}</h2>
            </div>
          </div>

          <!-- 下方: 影片輪播 -->
          <div class="modal-video" v-if="item.videos && item.videos.length > 0">
            <!-- 輪播器控制 -->
            <div class="carousel-container">
              <!-- 媒體描述 -->
              <div class="video-description">
                <div class="description-content">
                  <i
                    :class="
                      item.videos[currentVideoIndex].type === 'image'
                        ? 'bi bi-image'
                        : 'bi bi-play-circle'
                    "
                  ></i>
                  <h4>{{ item.videos[currentVideoIndex].description }}</h4>
                </div>
              </div>

              <!-- 媒體播放器 -->
              <div class="media-wrapper">
                <!-- 圖片展示 -->
                <img
                  v-if="item.videos[currentVideoIndex].type === 'image'"
                  :src="item.videos[currentVideoIndex].src"
                  class="modal-image-player"
                  :key="currentVideoIndex"
                  alt="專案展示圖"
                />

                <!-- 影片播放器 -->
                <video
                  v-else
                  :src="item.videos[currentVideoIndex].src"
                  class="modal-video-player"
                  controls
                  autoplay
                  muted
                  preload="metadata"
                  :key="currentVideoIndex"
                >
                  您的瀏覽器不支援影片播放
                </video>
              </div>

              <!-- 輪播控制按鈕 -->
              <div class="carousel-controls" v-if="item.videos && item.videos.length > 1">
                <button
                  class="carousel-btn prev"
                  @click="previousVideo"
                  :disabled="currentVideoIndex === 0"
                >
                  <i class="bi bi-chevron-left"></i>
                </button>

                <!-- 指示器 -->
                <div class="carousel-indicators">
                  <button
                    v-for="(video, index) in item.videos"
                    :key="index"
                    class="indicator"
                    :class="{ active: index === currentVideoIndex }"
                    @click="currentVideoIndex = index"
                  >
                    {{ index + 1 }}
                  </button>
                </div>

                <button
                  class="carousel-btn next"
                  @click="nextVideo"
                  :disabled="currentVideoIndex === item.videos.length - 1"
                >
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
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

const showModal = ref(false)
const currentVideoIndex = ref(0)
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

function openModal() {
  showModal.value = true
  currentVideoIndex.value = 0
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  showModal.value = false
  document.body.style.overflow = 'auto'
}

function nextVideo() {
  if (props.item.videos && currentVideoIndex.value < props.item.videos.length - 1) {
    currentVideoIndex.value++
  }
}

function previousVideo() {
  if (currentVideoIndex.value > 0) {
    currentVideoIndex.value--
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

.flex-video {
  object-fit: cover;
  aspect-ratio: 3/2;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.work-item:hover .flex-video {
  transform: scale(1.02);
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
  margin: 0.25rem 0 0.5rem 0;
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
  position: relative;
  cursor: pointer;
}

.project-preview.has-video {
  cursor: pointer;
}

.preview-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 0.5rem;
}

.project-preview:hover .preview-overlay {
  opacity: 1;
}

.preview-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-align: center;
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

.project-preview:hover .preview-btn {
  transform: translateY(0);
}

.preview-btn i {
  font-size: 2.5rem;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.preview-btn span {
  font-size: 0.875rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* 吸引注意的小圖示 */
.preview-hint {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: white;
  color: var(--bs-orange);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  animation: pulse-hint 2s infinite;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  border: 2px solid var(--bs-orange);
}

.project-preview:hover .preview-hint {
  opacity: 0;
  transform: scale(0.8);
}

@keyframes pulse-hint {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
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
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  min-width: 80px;
  flex: 1;
  max-width: 100px;
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

/* === Modal 樣式 === */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.modal-container {
  background: white;
  border-radius: 0.5rem;
  max-width: 90vw;
  max-height: 90vh;
  width: min(900px, 90vw);
  height: min(600px, 90vh);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10001;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}

.modal-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
}

/* 上方標題區域 */
.modal-header {
  padding: 1.5rem 2rem;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem 0.5rem 0 0;
  flex-shrink: 0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.modal-date-badge {
  background: var(--bs-orange);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  font-size: 0.625rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1;
  flex-shrink: 0;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--bs-dark);
  margin: 0;
  line-height: 1.3;
  text-align: center;
  letter-spacing: 0.5px;
}

/* 影片播放區域 */
.modal-video {
  flex: 1;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  min-height: 0;
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.video-description {
  background: rgba(248, 249, 250, 0.95);
  backdrop-filter: blur(10px);
  color: #495057;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  flex-shrink: 0;
  min-height: 60px;
  box-sizing: border-box;
}

.video-description::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: var(--bs-orange);
  border-radius: 1px;
}

.description-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.description-content i {
  font-size: 1.25rem;
  color: var(--bs-orange);
  opacity: 0.8;
}

.video-description h4 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #495057;
}

.media-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-height: 0;
  overflow: hidden;
}

.modal-video-player {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
}

.modal-image-player {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: rgba(248, 249, 250, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0 0 0.5rem 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  min-height: 70px;
  box-sizing: border-box;
}

.carousel-btn {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #6c757d;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-btn:hover:not(:disabled) {
  background: white;
  color: var(--bs-orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-indicators {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.indicator {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #6c757d;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.75rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.indicator.active {
  background: var(--bs-orange);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
}

.indicator:hover:not(.active) {
  background: white;
  color: var(--bs-orange);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 大螢幕優化 */
@media (min-width: 800px) {
  .modal-container {
    width: 800px;
    height: 550px;
  }

  .modal-header {
    padding: 1.25rem 2rem;
  }

  .carousel-controls {
    padding: 0.75rem 1.5rem;
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .modal-container {
    width: 95vw;
    height: 95vh;
  }

  .modal-header {
    padding: 1.5rem 1rem;
  }

  .header-content {
    flex-direction: column;
    gap: 0.75rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-video {
    padding: 0.5rem;
  }

  .video-description {
    padding: 1.25rem;
  }

  .description-content {
    gap: 0.5rem;
  }

  .description-content i {
    font-size: 1rem;
  }

  .video-description h4 {
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  .carousel-controls {
    padding: 0.75rem;
  }

  .carousel-btn {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }

  .indicator {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.75rem;
  }
}
</style>
