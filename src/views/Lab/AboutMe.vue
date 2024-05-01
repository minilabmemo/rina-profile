<template>
  <div class="container-xl manrope-font mt-5 " data-bs-theme="blue">
    <div class="text-primary ">text</div>
    <nav class="navbar  ">
      <div class="flex-grow-1  d-flex justify-content-between align-items-center ">
        <a class="navbar-brand" href="#">
          <div class="d-flex align-items-center gap-2 ">
            <img src="@/assets/icons/profile_logo.svg" alt="profile_logo">
            <span class="fw-bolder text-ps-orange fs-2  text-uppercase">Welcome!</span>
          </div>
        </a>
        <div class="d-flex  ">
          <ul class="navbar-nav d-flex flex-row gap-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <button type="button" class="btn bg-ps-orange text-white fw-bolder rounded-0 fs-4 ">about</button>

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button type="button"
                  class="btn btn-outline-ps-orange  text-pa-orange fw-bolder rounded-0 fs-4 ">skills</button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#"> <button type="button"
                  class="btn bg-ps-orange text-white fw-bolder rounded-0 fs-4 ">works</button></a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    <div class="bg-ps-orange d-flex justify-content-center " style="height: 1px;width: 100%; opacity:.4"></div>
    <section class="my-6 text-ps-orange" id="about">
      <div class="">
        <h1 class="  fs-3 fw-bolder">about me</h1>
        <div class="bg-ps-orange mt-1" style="height: 7px;width: 100px;"></div>
        <div class="row justify-content-center my-4m  py-5  outline-border ">
          <div class="col-12 col-lg-3">
            <CircleImage src="https://avatars.githubusercontent.com/u/112948083?v=4" />
          </div>
          <div class="col-12 col-lg-8">
            <div>
              <h1 class="me-2">Rina Huang
                <span> <img src="@/assets/icons/icon_loc.svg" alt="icon_loc" class="me-1"></span>
                <span class="fs-6  text-ps-brown ">Taiwan</span>
              </h1>
            </div>
            <div class="mt-2 mb-3 ">Having years of experience in backend development, I am currently expanding my skill
              set by acquiring
              frontend skills. Continuously learning and passionate about exploring new tools that can enhance
              efficiency.</div>

            <div class="row row-cols-1 row-cols-md-2  text-ps-black g-2" style="font-size:14px;">
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
    <section class="my-6  text-ps-black" id="skills">
      <h1 class="  fs-3 fw-bolder text-ps-orange">skills</h1>
      <div class="bg-ps-orange mt-1" style="height: 7px;width: 100px;"></div>
      <div class="row justify-content-between   g-3  mt-3">
        <div class="col-12 col-md-6 col-lg-3  p-2">
          <div class="d-flex gap-1 outline-border p-3 align-items-start ">
            <div class="icon"> <img src="@/assets/icons/icon_be.svg" alt="icon_be"></div>
            <div class="border-start ps-2">
              <h6 class="fw-bolder text-uppercase ">Backend </h6>
              <span class="fs-7 text-ps-gray fw-lighter  ">I have years of experience with</span>
              <div class="d-flex mt-1">
                <div class="icon"> <img src="@/assets/images/img_go.png" alt="img_go"> </div>
                <div class="icon"> <img src="@/assets/images/img_mongo.png" alt="img_mongo"></div>
                <div class="icon"> <img src="@/assets/images/img_vi.png" alt="img_vi"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3  p-2">
          <div class="d-flex gap-1 outline-border p-3 align-items-start ">
            <div class="icon"> <img src="@/assets/icons/icon_fe.svg" alt="icon_fe"></div>
            <div class="border-start ps-2">
              <h6 class="fw-bolder text-uppercase ">Frontend </h6>
              <span class="fs-7 text-ps-gray fw-lighter">I've had experiences with</span>
              <div class="d-flex mt-1">
                <div class="icon"> <img src="@/assets/images/img_go.png" alt="img_go"> </div>
                <div class="icon"> <img src="@/assets/images/img_mongo.png" alt="img_mongo"></div>
                <div class="icon"> <img src="@/assets/images/img_vi.png" alt="img_vi"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3  p-2">
          <div class="d-flex gap-1 outline-border p-3 align-items-start ">
            <div class="icon"> <img src="@/assets/icons/icon_devops.svg" alt="icon_devops"></div>
            <div class="border-start ps-2">
              <h6 class="fw-bolder text-uppercase ">DevOps </h6>
              <span class="fs-7 text-ps-gray fw-lighter">Competent in using </span>
              <div class="d-flex mt-1">
                <div class="icon"> <img src="@/assets/images/img_go.png" alt="img_go"> </div>
                <div class="icon"> <img src="@/assets/images/img_mongo.png" alt="img_mongo"></div>
                <div class="icon"> <img src="@/assets/images/img_vi.png" alt="img_vi"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3  p-2">
          <div class="d-flex gap-1 outline-border p-3 align-items-start ">
            <div class="icon"> <img src="@/assets/icons/icon_tools.svg" alt="icon_tools"></div>
            <div class="border-start ps-2">
              <h6 class="fw-bolder text-uppercase ">Platform / Tools </h6>
              <span class="fs-7 text-ps-gray fw-lighter">Competent in using </span>
              <div class="d-flex mt-1">
                <div class="icon"> <img src="@/assets/images/img_go.png" alt="img_go"> </div>
                <div class="icon"> <img src="@/assets/images/img_mongo.png" alt="img_mongo"></div>
                <div class="icon"> <img src="@/assets/images/img_vi.png" alt="img_vi"></div>
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
              <li>Familiar with <em>Restful API </em>and various OT communication protocols.</li>
              <li>Familiar with <em>Golang</em> programming language. </li>
              <li>Competent in <em>SQL/NoSQL</em> database management operations.</li>
              <li>Competent in <em>Docker/Kubernetes</em> concepts.</li>
              <li>Competent in <em>Git</em> version control experience.</li>
            </ul>
          </div>

        </div>
        <div class="col-12 col-md-4">
          <div class="outline-border p-4 h-100">
            <h6 class="fw-bolder "> Frontend Development </h6>
            <ul class="fw-lighter ">
              <li>Capable of <em>JavaScript, CSS, HTML.</em></li>
              <li>Capable of <em>React</em> front-end framework. </li>
              <li>Capable of <em>Vue</em> front-end framework.</li>
              <li>Capable of writing with <em>Tailwind CSS/Bootstrap.</em></li>
              <li>Familiar with <em>integrating and handling errors with backend.</em></li>
            </ul>
          </div>

        </div>
        <div class="col-12 col-md-4">
          <div class="outline-border p-4  h-100">
            <h6 class="fw-bolder ">Backend Development </h6>
            <ul class="fw-lighter ">
              <li>Coding <em>SCSS / CSS3</em></li>
              <li>Coding <em>TypeScript</em> </li>
              <li>Studying <em>Nuxt 3</em> basics</li>
              <li>Studying <em>User Experience.</em></li>

            </ul>
          </div>

        </div>

      </div>
    </section>

    <section class="my-6  text-ps-black" id="works">
      <h1 class="  fs-3 fw-bolder text-ps-orange">works</h1>
      <div class="bg-ps-orange mt-1" style="height: 7px;width: 100px;"></div>
      <div v-for="item in worksRef" :key="item.id">
        <WorkItem :item="item"></WorkItem>
      </div>

    </section>

  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import CircleImage from '@/components/Lab/CircleImage.vue'
import WorkItem from '@/components/Lab/WorkItem.vue'
import {works} from '@/utils/config/works.js'
const worksRef = ref(works)

</script>


<style lang="css" scoped>
.outline-border {
  border: 1px solid rgba(var(--bs-ps-brown-rgb), 0.3);
  border-radius: 10px;
}

.icon {
  width: 2.875rem;
  height: 2.875rem;
}

em {
  color: var(--bs-ps-brown);
  font-weight: 700;
}
</style>