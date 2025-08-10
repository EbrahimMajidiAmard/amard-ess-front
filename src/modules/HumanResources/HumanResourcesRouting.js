import DefaultLayout from "@/Layouts/DefaultLayout.vue";

export default [
    {
        path: '/HumanResources',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'RecruitmentRules',
                name: 'RecruitmentRules',
                component: () => import('@/modules/HumanResources/RecruitmentRules/RecruitmentRules.vue')
            }
        ]
    }
]