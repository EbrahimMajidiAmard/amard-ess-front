import { createRouter, createWebHistory } from 'vue-router'

import AuthRouting from '@/modules/auth/AuthRouting'
import PayrollRouting from '@/modules/payroll/PayrollRouting'
import HumanResourcesRouting from '@/modules/HumanResources/HumanResourcesRouting'
import SettingRouting from '@/modules/Setting/SettingRouting'

const routes = [
  ...AuthRouting,
  ...PayrollRouting,
  ...HumanResourcesRouting,
  ...SettingRouting,
  {
    path: '/',
    redirect: '/auth/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/auth/login' })
  } else {
    next()
  }
})

export default router
