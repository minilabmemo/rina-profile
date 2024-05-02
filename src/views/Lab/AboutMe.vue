<template>
  <div class="container-xl manrope-font mt-5 " data-bs-theme="sunny">
    <header class=" position-sticky top-0 bg-white">
      <nav class="navbar  ">
        <div class="flex-grow-1  d-flex justify-content-between align-items-center flex-wrap  ">
          <a class="navbar-brand" href="#/lab/about">
            <div class="d-flex align-items-center gap-2 ">
              <img src="@/assets/icons/profile_logo.svg" alt="profile_logo">
              <span class="fw-bolder text-primary fs-2  text-uppercase">Welcome!</span>
            </div>
          </a>
          <div class="d-flex  ">
            <ul class="navbar-nav d-flex flex-row gap-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/lab/about#about">
                  <button type="button" class="btn bg-primary text-white fw-bolder rounded-0 fs-4 ">about</button>

                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/lab/about#skills">
                  <button type="button"
                    class="btn btn-primary  text-white text-pa-orange fw-bolder rounded-0 fs-4 ">skills</button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#/lab/about#works"> <button type="button"
                    class="btn bg-primary text-white fw-bolder rounded-0 fs-4 ">works</button></a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div class="bg-primary d-flex justify-content-center " style="height: 1px;width: 100%; opacity:.4"></div>
    </header>
    <section class="my-6 text-primary" id="about">
      <div class="">
        <h1 class="  fs-3 fw-bolder">about me</h1>
        <div class="bg-primary mt-1" style="height: 7px;width: 100px;"></div>
        <div class="row justify-content-center my-4m  py-5  outline-border ">
          <div class="col-12 col-lg-3">
            <CircleImage src="https://avatars.githubusercontent.com/u/112948083?v=4" />
          </div>
          <div class="col-12 col-lg-8">
            <div>
              <h1 class="me-2">Rina Huang
                <span> <img src="@/assets/icons/icon_loc.svg" alt="icon_loc" class="me-1"></span>
                <span class="fs-6  text-secondary ">Taiwan</span>
              </h1>
            </div>
            <div class="mt-2 mb-3 text-secondary ">擁有多年的後端開發經驗，我目前正在透過獲取前端技能來擴展我的技能。熱衷於探索可以提高效率的應用工具。</div>

            <div class="row row-cols-1 row-cols-md-2  text-black g-2" style="font-size:14px;">
              <div class="col d-flex ">
                <img src="@/assets/icons/icon_github.svg" alt="icon_github" class="me-1">
                <span>GITHUB :https://github.com/minilabmemo</span>
              </div>
              <div class="col"> <img src="@/assets/icons/icon_blog.svg" alt="icon_blog" class="me-1">
                <span>BLOG :https://minilabmemo.github.io/</span>
              </div>
              <div class="col"> <img src="@/assets/icons/icon_instagram.svg" alt="icon_instagram" class="me-1">
                <span class="text-uppercase "> instagram : minilab_memo</span>
              </div>
              <div class="col">
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
    <section class="my-6  text-black" id="skills">
      <h1 class="  fs-3 fw-bolder text-primary">skills</h1>
      <div class="bg-primary mt-1" style="height: 7px;width: 100px;"></div>
      <div class="row justify-content-between   g-3  mt-3">
        <div class="col-12 col-md-6 col-lg-3  p-2">
          <div class="d-flex gap-1 outline-border p-3 align-items-start ">
            <div class="icon"> <img src="@/assets/icons/icon_be.svg" alt="icon_be"></div>
            <div class="border-start ps-2">
              <h6 class="fw-bolder text-uppercase ">Backend </h6>
              <span class="fs-7 text-gray fw-lighter  ">擁有多年的經驗</span>
              <div class="d-flex mt-1">
                <div class="icon"> <img class="icon-image " src="@/assets/images/img_go.png" alt="icon"> </div>
                <div class="icon"> <img class="icon-image " src="@/assets/images/img_mongo.png" alt="icon"></div>
                <div class="icon"> <img class="icon-image" src="@/assets/images/img_vi.png" alt="icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3  p-2">
          <div class="d-flex gap-1 outline-border p-3 align-items-start ">
            <div class="icon"> <img src="@/assets/icons/icon_fe.svg" alt="icon_fe"></div>
            <div class="border-start ps-2">
              <h6 class="fw-bolder text-uppercase ">Frontend </h6>
              <span class="fs-7 text-gray fw-lighter">能勝任使用</span>
              <div class="d-flex mt-1">
                <div class="icon"> <img class="icon-image " src="@/assets/images/img_js.png" alt="icon"> </div>
                <div class="icon"> <img class="icon-image " src="@/assets/images/img_vue.png" alt="icon"></div>
                <div class="icon"> <img class="icon-image " src="@/assets/images/img_react.png" alt="icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3  p-2">
          <div class="d-flex gap-1 outline-border p-3 align-items-start ">
            <div class="icon"> <img src="@/assets/icons/icon_devops.svg" alt="icon_devops"></div>
            <div class="border-start ps-2">
              <h6 class="fw-bolder text-uppercase ">DevOps </h6>
              <span class="fs-7 text-gray fw-lighter">能勝任使用 </span>
              <div class="d-flex mt-1">
                <div class="icon"> <img class="icon-image" src="@/assets/images/img_docker.png" alt="icon"> </div>
                <div class="icon"> <img class="icon-image" src="@/assets/images/img_k8s.png" alt="icon"></div>
                <div class="icon"> <img class="icon-image" src="@/assets/images/img_grafana.png" alt="icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3  p-2">
          <div class="d-flex gap-1 outline-border p-3 align-items-start ">
            <div class="icon"> <img src="@/assets/icons/icon_tools.svg" alt="icon_tools"></div>
            <div class="border-start ps-2">
              <h6 class="fw-bolder text-uppercase ">Platform / Tools </h6>
              <span class="fs-7 text-gray fw-lighter">能勝任使用 </span>
              <div class="d-flex mt-1">
                <div class="icon"> <img class="icon-image" src="@/assets/images/img_git.png" alt="icon"> </div>
                <div class="icon"> <img class="icon-image" src="@/assets/images/img_postman.png" alt="icon"></div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-between   g-5  mt-3 ">
        <div class="col-12 col-md-4">
          <div class="outline-border p-4 h-100">
            <h6 class="fw-bolder ">Backend Development </h6>
            <ul class="fw-lighter ">
              <li>熟悉 <em>Restful API </em>和多種 OT 通訊協定</li>
              <li>熟悉 <em>Golang</em> 程式語言 </li>
              <li>具備 <em>SQL/NoSQL</em> 資料庫管理操作</li>
              <li>具備 <em>Docker/Kubernetes</em> 管理操作</li>
              <li>具備 <em>Git</em> 版本控管經驗</li>
            </ul>
          </div>

        </div>
        <div class="col-12 col-md-4">
          <div class="outline-border p-4 h-100">
            <h6 class="fw-bolder "> Frontend Development </h6>
            <ul class="fw-lighter ">
              <li>具備 <em>JavaScript, CSS, HTML</em></li>
              <li>具備 <em>React</em>前端框架 </li>
              <li>具備 <em>Vue</em>前端框架</li>
              <li>具備使用 <em>Tailwind /Bootstrap </em>撰寫樣式</li>

            </ul>
          </div>

        </div>
        <div class="col-12 col-md-4">
          <div class="outline-border p-4  h-100">
            <h6 class="fw-bolder "> work and study about </h6>
            <ul class="fw-lighter ">
              <li>研究 <em>SCSS / CSS3</em></li>
              <li>研究 <em>TypeScript</em> </li>
              <li>學習 <em>Nuxt 3</em> 架構</li>
              <li>學習 <em>User Experience</em></li>

            </ul>
          </div>

        </div>

      </div>
    </section>

    <section class="my-6  text-black " id="works">
      <h1 class="  fs-3 fw-bolder text-primary">works</h1>
      <div class="bg-primary mt-1" style="height: 7px;width: 100px;"></div>
      <div class="d-flex flex-wrap  justify-content-around outline-border mt-4">
        <template v-for="(item, i) in works" :key="i">
          <div class="" style="flex-basis: 24rem" v-if="!item.isHide">
            <WorkItem :item="item"></WorkItem>
          </div>


        </template>
      </div>

    </section>

  </div>
</template>


<script setup lang="ts">

import CircleImage from '@/components/Lab/CircleImage.vue'
import WorkItem from '@/components/Lab/WorkItem.vue'
import { works } from '@/utils/config/works'


</script>


<style lang="css" scoped>
header {
  z-index: 5
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
  margin-right: .2rem;
}
</style>