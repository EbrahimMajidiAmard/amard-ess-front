<template>
    <PageRoute :breadcrumbs="[
        { text: ' کار گزینی ', link: '' },
        { text: 'احکام کارگزینی', link: '/Payroll/Payslip' }
    ]" />
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title"> جستجو </div>
                </div>
                <div class="card-body">
                    <form class="row g-2" @submit.prevent="submitForm">
                        <div class="col-xl-3 col-md-4 col-sm-6">
                            <SimpleSelect v-model="selectedYear" :options="YearOptions" placeholder="لطفا سال را وارد کنید" />
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-6 d-grid">
                            <button type="submit" class="btn btn-success btn-sm">جستجو</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PageRoute from '@/components/common/PageRoute.vue'
import SimpleSelect from '@/components/common/SimpleSelect.vue';
import * as Service from '@/modules/HumanResources/RecruitmentRules/RecruitmentRulesService'

const { selectedYear, YearOptions } = Service.useRecruitmentRulesFilters()

function submitForm(){
    window.showMessage("حکم مورد نظر یافت نشد", "error")
}
</script>