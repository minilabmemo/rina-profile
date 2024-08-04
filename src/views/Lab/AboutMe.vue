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
                  <button type="button" class="button-3d fw-bolder size-md text-black">about</button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/lab/about#skills">
                  <button type="button" class="button-3d fw-bolder size-md text-black">skills</button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/lab/about#works">
                  <button type="button" class="button-3d fw-bolder size-md text-black">
                    works
                  </button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="bg-primary d-flex justify-content-center mt-2" style="height: 1px; width: 100%; opacity: 0.4"></div>
    </header>
    <section class="my-6 text-primary" id="about">
      <transition name="slide-left">
        <div v-if="showContent">
          <h1 class="fs-3 fw-bolder">about me</h1>

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
                      <img src="@/assets/icons/icon_loc.svg" alt="icon_loc" class="me-1" /></span>
                    <span class="fs-6 text-secondary">Taiwan</span>
                  </h1>
                </div>
                <div class="mt-2 mb-3 text-secondary">
                  擁有多年的後端開發經驗，目前正在學習前端技能。熱衷於探索有趣的應用工具提升效率。
                </div>

                <div class="row row-cols-1 row-cols-md-2 text-black g-2" style="font-size: 14px">
                  <div class="col d-flex">
                    <a href="https://github.com/minilabmemo" class="nav-link d-inline" target="_blank">
                      <img src="@/assets/icons/icon_github.svg" alt="icon_github" class="me-1" />
                      <span>GITHUB : https://github.com/minilabmemo </span>
                    </a>
                  </div>
                  <div class="col">
                    <a href="https://minilabmemo.github.io/" class="nav-link d-inline" target="_blank">
                      <img src="@/assets/icons/icon_blog.svg" alt="icon_blog" class="me-1" />
                      <span>BLOG : https://minilabmemo.github.io/</span>
                    </a>
                  </div>
                  <div class="col">
                    <a href="https://www.instagram.com/minilabmemo/" class="nav-link d-inline" target="_blank">
                      <img src="@/assets/icons/icon_instagram.svg" alt="icon_instagram" class="me-1" />
                      <span class="text-uppercase"> instagram : minilabmemo</span>
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
          <h1 class="fs-3 fw-bolder text-primary">skills</h1>
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
                <div class="icon"><img src="@/assets/icons/icon_devops.svg" alt="icon_devops" /></div>
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
                <h6 class="fw-bolder">Backend Development</h6>
                <ul class="fw-lighter">
                  <li>熟悉 <em>Restful API </em>和多種 OT 通訊協定</li>
                  <li>熟悉 <em>Golang</em> 程式語言</li>
                  <li>具備 <em>SQL/NoSQL</em> 資料庫管理操作</li>
                  <li>具備 <em>Docker/Kubernetes</em> 管理操作</li>
                  <li>具備 <em>Git</em> 版本控管經驗</li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="outline-border p-4 h-100 item">
                <h6 class="fw-bolder">Frontend Development</h6>
                <ul class="fw-lighter">
                  <li>具備 <em>JavaScript, CSS, HTML</em></li>
                  <li>具備 <em>React</em>前端框架</li>
                  <li>具備 <em>Vue</em>前端框架</li>
                  <li>具備使用 <em>Tailwind CSS/Bootstrap </em>撰寫</li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="outline-border p-4 h-100 item">
                <h6 class="fw-bolder">work and study about</h6>
                <ul class="fw-lighter">
                  <li>研究 <em>SCSS / CSS3</em></li>
                  <li>研究 <em>TypeScript</em></li>
                  <li>學習 <em>Nuxt 3</em> 架構</li>
                  <li>學習 <em>User Experience</em></li>
                  <li>使用 <em>Google Firebase</em></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>

    <section class="my-6 text-black" id="works">
      <transition name="slide-left">
        <div v-if="showContent">
          <h1 class="fs-3 fw-bolder text-primary">works</h1>
          <div class="bg-primary mt-1" style="height: 7px; width: 100px"></div>
          <div class="d-flex flex-wrap justify-content-around mt-4">
            <template v-for="(item, i) in works" :key="i">
              <div class="" style="flex-basis: 24rem" v-if="!item.isHide">
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
import { ref, onMounted } from 'vue';

const showContent = ref(false);

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 500);
});
</script>

<style lang="css" scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform .5s;
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

em {
  color: var(--bs-secondary);
  font-weight: 700;
  margin-right: 0.2rem;
}

.my-tooltip {
  position: relative;
  display: inline-block;
}

.my-tooltip .tooltiptext {
  visibility: hidden;

  background-color: rgba(var(--bs-secondary-rgb));
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 5px;

  position: absolute;
  z-index: 1;
}

.my-tooltip:hover .tooltiptext {
  visibility: visible;
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
</style>
