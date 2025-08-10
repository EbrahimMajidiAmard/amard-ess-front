import { createRouter, createWebHistory } from 'vue-router'

import AuthRouting from '@/modules/auth/AuthRouting'
import PayrollRouting from '@/modules/payroll/PayrollRouting'
import HumanResourcesRouting from '@/modules/HumanResources/HumanResourcesRouting'

const routes = [
  ...AuthRouting,
  ...PayrollRouting,
  ...HumanResourcesRouting,
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/Login' })
  } else {
    next()
  }
})

export default router
