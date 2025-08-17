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
            {
                path: 'forgetPassword',
                name: 'forgetPasswrod',
                children: [
                    {
                        path: 'verifyMobile',
                        name: 'verifyMobile',
                        component: () => import('@/modules/auth/forgetPassword/verifyMobile/VerifyMobile.vue')
                    },
                    {
                        path: 'verifySms',
                        name: 'verifySms',
                        component: () => import('@/modules/auth/forgetPassword/verifyMobile/VerifySms.vue')
                    },
                    {
                        path: 'changePassword',
                        name: 'changePassword',
                        component: () => import('@/modules/auth/forgetPassword/changePassword/ChangePassword.vue')
                    },
                ]
            },
        ]
    }
]