import DefaultLayout from "@/Layouts/DefaultLayout.vue";

export default [
    {
        path: '/Setting',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: 'UserAccount',
                name: 'UserAccount',
                component: import('@/modules/Setting/UserAccount/UserAccount.vue')
            },
            {
                path: 'ChangePassword',
                name: 'ChangePasswrod',
                component: import('@/modules/Setting/ChagePassword/ChangePassword.vue')
            }
        ]
    }
]