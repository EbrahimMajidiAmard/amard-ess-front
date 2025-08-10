import DefaultLayout from '@/Layouts/DefaultLayout.vue'

export default [
    {
        path: "/Payroll",
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'Payslip',
                name: 'Payslip',
                component: () => import('@/modules/payroll/payslip/PayrollPayslip.vue')
            }
        ]
    }
]