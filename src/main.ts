//import './assets/main.css'
import './assets/all.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import LoadingOverlay from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { currency,date } from '@/utils/methods/filters';
import $httpMessageState from '@/utils/methods/pushMessageState';

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency,
};

app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.component('LoadingOverlay',LoadingOverlay)
app.mount('#app')
