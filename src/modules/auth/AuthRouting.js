import AuthLayout from '@/Layouts/AuthLayout.vue'

export default [
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('@/modules/auth/login/AuthLogin.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('@/modules/auth/register/AuthRegister.vue')
            },
        ]
    }
]