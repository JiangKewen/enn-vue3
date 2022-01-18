import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/page1',
    name: 'Page1',
    component: () => import('@/views/page1/PageOne.vue')
  },
  {
    path: '/page2',
    name: 'Page2',
    component: () => import('@/views/page2/PageTwo.vue')
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => {
    return {
      // el: '#app',
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})

export default router
