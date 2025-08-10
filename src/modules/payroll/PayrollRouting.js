import DefaultLayout from '@/Layouts/DefaultLayout.vue'

export default [
    {
        path: "/Payroll/Payslip",
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'Payslip',
                component: () => import('@/modules/payroll/payslip/PayrollPayslip.vue')
            }
        ]
    }
]