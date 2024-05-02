import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/Base/NotFound.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash
      }
    } else {
      return { top: 0 }
    }
  },
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
      component: () => import('../views/Base/AboutView.vue')
    },
    {
      path: '/lab',
      name: 'lab',
      children: [
        {
          path: 'about',
          component: () => import('../views/Lab/AboutMe.vue')
        },
        {
          path: 'flex',
          component: () => import('../views/Lab/FlexView.vue')
        }
      ]
    },
    {
      path: '/pinia',
      component: () => import('../views/Pinia/Dashboard.vue'),
      children: [
        {
          path: 'about/option',
          component: () => import('../views/Pinia/UserAboutOption.vue')
        },
        {
          path: 'about',
          component: () => import('../views/Pinia/UserAbout.vue')
        },
        {
          path: 'about2',
          component: () => import('../views/Pinia/UserAbout2.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/Pinia/Cart.vue')
        }
      ]
    },
    {
      path: '/bs',

      children: [
        {
          path: 'row',
          component: () => import('../views/Base/RowView.vue')
        },
        {
          path: 'card',
          component: () => import('../views/Base/CardView.vue')
        }
      ]
    },
    { path: '/:about(.*)*', redirect: { name: 'about' } },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/EC/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/EC/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/EC/Products.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/EC/Orders.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/EC/Coupons.vue')
        }
      ]
    },
    {
      path: '/user',
      component: () => import('../views/EC/Userboard.vue'),
      children: [
        {
          path: 'cart',
          component: () => import('../views/EC/UserCart.vue')
        },
        {
          path: 'product/:productId',
          component: () => import('../views/EC/UserProduct.vue')
        },
        {
          path: 'checkout/:orderId',
          component: () => import('../views/EC/UserCheckout.vue')
        }
      ]
    }
  ]
})

export default router
