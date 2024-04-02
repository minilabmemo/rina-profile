import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Base/HomeView.vue'
import NotFound from '../views/Base/NotFound.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)', component: NotFound },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
  
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Base/AboutView.vue'),

    },
    {
      path: '/pinia',
      component: () => import('../views/Pinia/Dashboard.vue'),
      children: [
        {
          path: 'about',
          component: () => import('../views/Pinia/UserAbout.vue'),
        },
        {
          path: 'about/option',
          component: () => import('../views/Pinia/UserAboutOption.vue'),
        },
        {
          path: 'cart',
          component: () => import('../views/Pinia/Cart.vue'),
        },
      ],
    },
    {
      path: '/row',
      name: 'row',
      component: () => import('../views/Base/RowView.vue'),

    },
     { path: '/:about(.*)*', redirect: { name: 'about' }  },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Base/LoginView.vue')
    },{
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Base/DashboardView.vue'),
      children:[
        {
          path:'products',
          component:()=>import('../views/Base/Products.vue'),
        } ,{
          path: 'orders',
          component: () => import('../views/Base/Orders.vue'),
        },
        {
          path: 'coupons',
          component: () => import('../views/Base/Coupons.vue'),
        },
      ]
    },
    {
      path: '/user',
      component: () => import('../views/Base/Userboard.vue'),
      children: [
        {
          path: 'cart',
          component: () => import('../views/Base/UserCart.vue'),
        },
        {
          path: 'product/:productId',
          component: () => import('../views/Base/UserProduct.vue'),
        },
        {
          path: 'checkout/:orderId',
          component: () => import('../views/Base/UserCheckout.vue'),
        },
      ],
    },
  ]
})

export default router
