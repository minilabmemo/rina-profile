import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/Base/NotFound.vue'
import { useFavicon } from '@vueuse/core'

const icon = useFavicon()
const profileFavIcon = 'profile_logo.ico'

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
      meta: {
        title: 'My Profile | Software Engineer!',
        icon: profileFavIcon
      },
      component: () => import('../views/Lab/AboutMe.vue')
    },
    {
      path: '/list',
      name: 'list',
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
      meta: {
        title: 'My Profile | Software Engineer!',
        icon: profileFavIcon
      },
      children: [
        {
          path: 'about',
          component: () => import('../views/Lab/AboutMe.vue')
        },
        {
          path: 'about/v1',
          component: () => import('../views/Lab/AboutMeV1.vue')
        },
        {
          path: 'flex',
          component: () => import('../views/Lab/FlexView.vue')
        },
        {
          path: 'show',
          component: () => import('../views/Lab/ShowCase.vue')
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
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  if (to.meta.icon) {
    icon.value = to.meta.icon as string
  } else {
    icon.value = ''
  }
})
export default router
