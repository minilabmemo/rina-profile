<template>
  <div class="container-xl manrope-font mt-5" data-bs-theme="sunny">
    <header class="position-sticky top-0 bg-white">
      <nav class="navbar">
        <div class="flex-grow-1 d-flex justify-content-between align-items-center flex-wrap">
          <a class="navbar-brand" href="#/lab/about">
            <div class="d-flex align-items-center gap-2">
              <img src="@/assets/icons/profile_logo.svg" alt="profile_logo" />
              <span class="fw-bolder text-primary fs-2 text-uppercase">Welcome!</span>
            </div>
          </a>
          <div class="d-flex">
            <ul class="navbar-nav d-flex flex-row gap-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/lab/about#about">
                  <button type="button" class="button-3d fw-bolder size-md text-black">
                    about
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/lab/about#skills">
                  <button type="button" class="button-3d fw-bolder size-md text-black">
                    skills
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/lab/about#training">
                  <button type="button" class="button-3d fw-bolder size-md text-black">
                    Training
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/lab/about#works">
                  <button type="button" class="button-3d fw-bolder size-md text-black">
                    works
                  </button></a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="bg-primary d-flex justify-content-center mt-2"
        style="height: 1px; width: 100%; opacity: 0.4"
      ></div>
    </header>
    <section class="my-6 text-primary" id="about">
      <transition name="slide-left">
        <div v-if="showContent">
          <h1 class="fs-3 fw-bolder">About me</h1>

          <div class="bg-primary mt-1" style="height: 7px; width: 100px"></div>
          <div class="p-2">
            <div class="row justify-content-center my-4m py-5 outline-border item gy-3">
              <div class="col-12 col-lg-3 position-relative">
                <CircleImage src="https://avatars.githubusercontent.com/u/112948083?v=4" />
                <div class="position-absolute dialogue">
                  <TypingEffect />
                </div>
              </div>
              <div class="col-12 col-lg-8">
                <div>
                  <h1 class="me-2">
                    Rina Huang
                    <span>
                      <img src="@/assets/icons/icon_loc.svg" alt="icon_loc" class="me-1"
                    /></span>
                    <span class="fs-6 text-secondary">Taiwan</span>
                  </h1>
                </div>
                <div class="mt-2 mb-3 text-secondary">
                  擁有豐富的後端開發經驗，自學前端技術，具備全端開發能力。熱愛探索能提升效率或帶來趣味的各類工具。
                </div>

                <div class="row row-cols-1 row-cols-md-2 text-black g-2" style="font-size: 14px">
                  <div class="col d-flex">
                    <a
                      href="https://github.com/minilabmemo"
                      class="nav-link d-inline"
                      target="_blank"
                    >
                      <img src="@/assets/icons/icon_github.svg" alt="icon_github" class="me-1" />
                      <span>GITHUB : https://github.com/minilabmemo </span>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://minilabmemo.github.io/memo-code-blog/"
                      class="nav-link d-inline"
                      target="_blank"
                    >
                      <img src="@/assets/icons/icon_blog.svg" alt="icon_blog" class="me-1" />
                      <span>MEMO : 前後端開發雜記</span>
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="https://www.instagram.com/minilabmemo/"
                      class="nav-link d-inline"
                      target="_blank"
                    >
                      <img
                        src="@/assets/icons/icon_instagram.svg"
                        alt="icon_instagram"
                        class="me-1"
                      />
                      <span class="text-uppercase"> instagram : 小研究式 minilabmemo</span>
                    </a>
                  </div>
                  <div class="col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>
    <section class="my-6 text-black" id="skills">
      <transition name="slide-right">
        <div v-if="showContent">
          <h1 class="fs-3 fw-bolder text-primary">Skills</h1>
          <div class="bg-primary mt-1" style="height: 7px; width: 100px"></div>
          <div class="row justify-content-between gy-3 mt-3">
            <div class="col-12 col-md-6 col-lg-3 p-2">
              <div class="d-flex gap-1 outline-border p-3 align-items-start item">
                <div class="icon"><img src="@/assets/icons/icon_be.svg" alt="icon_be" /></div>
                <div class="border-start ps-2">
                  <h6 class="fw-bolder text-uppercase">Backend</h6>

                  <div class="d-flex mt-1">
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_go.png" alt="icon" />
                      <span class="tooltiptext">Golang</span>
                    </div>
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_mongo.png" alt="icon" />
                      <span class="tooltiptext">Mongo</span>
                    </div>
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_vi.png" alt="icon" />
                      <span class="tooltiptext">Vi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 p-2">
              <div class="d-flex gap-1 outline-border p-3 align-items-start item">
                <div class="icon"><img src="@/assets/icons/icon_fe.svg" alt="icon_fe" /></div>
                <div class="border-start ps-2">
                  <h6 class="fw-bolder text-uppercase">Frontend</h6>

                  <div class="d-flex mt-1">
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_js.png" alt="icon" />
                      <span class="tooltiptext">Javascript</span>
                    </div>
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_react.png" alt="icon" />
                      <span class="tooltiptext">React</span>
                    </div>
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_vue.png" alt="icon" />
                      <span class="tooltiptext">Vue</span>
                    </div>
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_tw.png" alt="icon" />
                      <span class="tooltiptext">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 p-2">
              <div class="d-flex gap-1 outline-border p-3 align-items-start item">
                <div class="icon">
                  <img src="@/assets/icons/icon_devops.svg" alt="icon_devops" />
                </div>
                <div class="border-start ps-2">
                  <h6 class="fw-bolder text-uppercase">DevOps</h6>

                  <div class="d-flex mt-1">
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_docker.png" alt="icon" />
                      <span class="tooltiptext">docker</span>
                    </div>

                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_k8s.png" alt="icon" />
                      <span class="tooltiptext">Kubernetes</span>
                    </div>
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_grafana.png" alt="icon" />
                      <span class="tooltiptext">Grafana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 p-2">
              <div class="d-flex gap-1 outline-border p-3 align-items-start item">
                <div class="icon"><img src="@/assets/icons/icon_tools.svg" alt="icon_tools" /></div>
                <div class="border-start ps-2">
                  <h6 class="fw-bolder text-uppercase">Platform / Tools</h6>

                  <div class="d-flex mt-1">
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_git.png" alt="icon" />
                      <span class="tooltiptext">Git</span>
                    </div>
                    <div class="icon my-tooltip">
                      <img class="icon-image" src="@/assets/images/img_postman.png" alt="icon" />
                      <span class="tooltiptext">Postman</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-between gy-3 mt-3">
            <div class="col-12 col-md-4">
              <div class="outline-border p-4 h-100 item">
                <h6 class="fw-bolder">後端技術（Backend Development）</h6>
                <ul class="fw-lighter">
                  <li>熟悉 Restful API 和多種 OT 通訊協定</li>
                  <li>熟悉 Golang 程式語言</li>
                  <li>瞭解 SQL/NoSQL 資料庫管理操作</li>
                  <li>瞭解 Docker/Kubernetes 管理操作</li>
                  <li>瞭解 Git 版本控管經驗</li>
                  <li>擁有 Java OCJP 程式設計證照</li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="outline-border p-4 h-100 item">
                <h6 class="fw-bolder">前端技術（Frontend Development）</h6>
                <ul class="fw-lighter">
                  <li>熟悉 JavaScript, CSS, HTML 切版</li>
                  <li>熟悉 Linter 維護程式碼品質</li>
                  <li>瞭解 React / Vue 前端框架開發</li>
                  <li>瞭解 Tailwind CSS / Bootstrap 撰寫樣式</li>
                  <li>瞭解 Playwright / Vitest 測試工具</li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="outline-border p-4 h-100 item">
                <h6 class="fw-bolder">學習中（Work And Study About）</h6>
                <ul class="fw-lighter">
                  <li>各種 AI Coding 工具</li>
                  <li>運用 Nuxt 3 架構撰寫網站</li>
                  <li>動畫 Rive 製作</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>

    <section class="my-6 text-black" id="training">
      <transition name="slide-left">
        <div v-if="showContent">
          <h1 class="fs-3 fw-bolder text-primary">Training & Certification</h1>
          <div class="bg-primary mt-1" style="height: 7px; width: 100px"></div>

          <div class="row justify-content-start gy-3 mt-3">
            <div class="col-12 col-md-6 p-2">
              <div class="outline-border p-3 h-100 item">
                <div class="d-flex align-items-start gap-2">
                  <div class="icon" style="width: 2rem; height: 2rem">
                    <img src="@/assets/icons/icon_tools.svg" alt="icon_learning" />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="fw-bolder mb-2" style="font-size: 14px">Google AI 培訓計畫</h6>
                    <div class="text-secondary mb-2" style="font-size: 13px">
                      獲得超過 30 個課程徽章
                    </div>
                    <ul class="mb-2 ps-3" style="font-size: 13px">
                      <li class="text-secondary">2025 Google Cloud AI 培訓計畫</li>
                      <li class="text-secondary">2024 生成式 AI 培訓計劃</li>
                    </ul>
                    <a
                      href="https://www.credly.com/users/minilab-memo/badges#credly"
                      class="nav-link text-primary fw-medium p-0"
                      target="_blank"
                      style="font-size: 13px"
                    >
                      <i class="bi bi-award-fill me-1"></i>
                      查看徽章與課程
                      <i class="bi bi-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-2">
              <div class="outline-border p-3 h-100 item">
                <div class="d-flex align-items-start gap-2">
                  <div class="icon" style="width: 2rem; height: 2rem">
                    <img src="@/assets/icons/icon_fe.svg" alt="icon_f2e" />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="fw-bolder mb-2" style="font-size: 14px">前端培訓課程</h6>
                    <div class="text-secondary mb-2" style="font-size: 13px">
                      完成六角學院 The F2E 前端課程
                    </div>
                    <ul class="mb-2 ps-3" style="font-size: 13px">
                      <li class="text-secondary">2024 六角學院 Vue 3 實戰影音課程 + 程式勇者村</li>
                      <li class="text-secondary">2023 The F2E 前端 & UI 修煉精神時光屋 金級徽章</li>
                    </ul>
                    <a
                      href="https://2023.thef2e.com/users/12062117482778778495?week=1"
                      class="nav-link text-primary fw-medium p-0"
                      target="_blank"
                      style="font-size: 13px"
                    >
                      <i class="bi bi-award-fill me-1"></i>
                      查看 F2E 作品成果
                      <i class="bi bi-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>

    <section class="my-6 text-black" id="works">
      <transition name="slide-left">
        <div v-if="showContent">
          <h1 class="fs-3 fw-bolder text-primary">Works</h1>
          <div class="bg-primary mt-1" style="height: 7px; width: 100px"></div>

          <!-- 標籤篩選器 -->
          <div class="tag-filter mt-4 mb-4">
            <div class="d-flex flex-wrap gap-2 justify-content-start align-items-center">
              <i class="bi bi-funnel filter-icon"></i>
              <button
                v-for="tag in allTags"
                :key="tag"
                @click="toggleTag(tag)"
                :class="['tag-filter-btn', { active: selectedTag === tag }]"
              >
                {{ tag }}
              </button>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-around mt-4">
            <template v-for="(item, i) in filteredWorks" :key="i">
              <div class="" style="flex-basis: 22rem">
                <WorkItem :item="item"></WorkItem>
              </div>
            </template>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script setup lang="ts">
import CircleImage from '@/components/Lab/CircleImage.vue'
import WorkItem from '@/components/Lab/WorkItem.vue'
import { works } from '@/utils/config/works'
import TypingEffect from '@/components/Lab/TypingEffect.vue'
import { ref, onMounted, computed } from 'vue'

const showContent = ref(false)
const selectedTag = ref('')

// 獲取所有唯一標籤
const allTags = computed(() => {
  const tags = new Set<string>()
  works.forEach((work) => {
    if (!work.isHide) {
      work.tags.forEach((tag) => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
})

// 篩選後的作品
const filteredWorks = computed(() => {
  if (!selectedTag.value) {
    return works.filter((work) => !work.isHide)
  }
  return works.filter((work) => !work.isHide && work.tags.includes(selectedTag.value))
})

// 切換標籤篩選
const toggleTag = (tag: string) => {
  selectedTag.value = selectedTag.value === tag ? '' : tag
}

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 500)
})
</script>

<style lang="css" scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.item:hover {
  opacity: 0.9;
  box-shadow: 0 10px 20px rgba(142, 142, 142, 0.2);
}

header {
  z-index: 5;
}

.outline-border {
  border: 1px solid rgba(var(--bs-secondary-rgb), 0.3);
  border-radius: 10px;
}

.icon {
  width: 2.875rem;
  height: 2.875rem;
}

.icon-image {
  object-fit: cover;
  aspect-ratio: 1/1;
  width: 100%;
  height: auto;
}

.my-tooltip {
  position: relative;
  display: inline-block;
}

.my-tooltip .tooltiptext {
  visibility: hidden;
  opacity: 0;
  background-color: rgba(var(--bs-secondary-rgb));
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 12px;
  white-space: nowrap;
  position: absolute;
  z-index: 10;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  transition:
    opacity 0.3s,
    visibility 0.3s;
}

.my-tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: rgba(var(--bs-secondary-rgb)) transparent transparent transparent;
}

.my-tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
}

button.button-3d {
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 0.5em 0.75em;
  background: var(--bs-orange-100);
  border: 2px solid var(--bs-orange-900);
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition:
    transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.button-3d::before {
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

button.button-3d:hover {
  color: var(--bs-orange-900);
  background: var(--bs-orange-300);
  transform: translate(0, 0.25em);
}

button.button-3d:hover::before {
  background: var(--bs-orange-600);
  transform: translate3d(0, 0.5em, -1em);
}

button.button-3d:active {
  background: var(--bs-orange-500);
  transform: translate(0em, 0.75em);
}

button.button-3d:active::before {
  box-shadow:
    0 0 0 2px var(--bs-orange-900),
    0 0 var(--bs-orange-200);
  transform: translate3d(0, 0, -1em);
}

.dialogue {
  top: -30px;
  left: 10px;
}

.size-md {
  font-size: clamp(0.875rem, 0.85rem + 0.125vw, 1rem);
}

/* 標籤篩選器樣式 */
.tag-filter-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6c757d;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;
  min-width: 50px;
  position: relative;
  overflow: hidden;
  height: 1.75rem;
}

.tag-filter-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.tag-filter-btn:hover {
  color: var(--bs-primary);
  border-color: var(--bs-primary);
  background: rgba(var(--bs-primary-rgb), 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--bs-primary-rgb), 0.2);
}

.tag-filter-btn:hover::before {
  left: 100%;
}

.tag-filter-btn.active {
  color: white;
  background: var(--bs-primary);
  border-color: var(--bs-primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(var(--bs-primary-rgb), 0.3);
}

.tag-filter-btn.active:hover {
  background: var(--bs-primary);
  color: white;
  box-shadow: 0 8px 20px rgba(var(--bs-primary-rgb), 0.4);
}

.tag-filter {
  position: relative;
}

.filter-icon {
  font-size: 1rem;
  color: #495057;
  opacity: 0.8;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.filter-icon:hover {
  color: #343a40;
  opacity: 1;
  transform: scale(1.1);
}
</style>
