import AuthLayout from '@/Layouts/AuthLayout.vue'

export default [
    {
        path: '/login',
        component: AuthLayout,
        children: [
            {
              path: '',
              name: 'login',
              component: () => import('@/modules/auth/login/AuthLogin.vue')  
            }
        ]
    },
    {
        path:"/register",
        component:AuthLayout,
        children: [
            {
                path: '',
                name: 'register',
                component: () => import('@/modules/auth/register/AuthRegister.vue')
            }
        ]
    }
]