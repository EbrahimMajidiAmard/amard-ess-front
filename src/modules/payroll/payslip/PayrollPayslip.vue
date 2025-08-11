<template>
    <PageRoute :breadcrumbs="[
        { text: 'حقوق و دستمزد', link: '' },
        { text: 'فیش حقوقی', link: '/Payroll/Payslip' }
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
                            <SimpleSelect v-model="selectedYear" :options="YearOptions"
                                placeholder="لطفا سال را وارد کنید" />
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-6">
                            <SimpleSelect v-model="selectedMonth" :options="MonthOptions"
                                placeholder="لطفا ماه را وارد کنید" />
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-6">
                            <SimpleSelect v-model="selectedLevel" :options="LevelOptions"
                                placeholder="لطفا مرحله را وارد کنید" />
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-6 d-grid">
                            <button type="submit" class="btn btn-success btn-sm">جستجو</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"> -->
    <div v-if="imageUrl != null" class="row">
        <div class="col-12">
            <div class="card custom-card">
                <img :src="imageUrl" class="card-img-top" alt="فیش حقوقی">
                <div class="card-body">
                    <div class="d-grid">
                        <button @click="downloadImage"
                            class="btn btn-primary-light btn-wave waves-effect waves-light">دانلود فیش</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PageRoute from '@/components/common/PageRoute.vue'
import SimpleSelect from '@/components/common/SimpleSelect.vue'
import { imageUrl, selectedYear, selectedMonth, selectedLevel, YearOptions, MonthOptions, LevelOptions, submitForm, downloadImage } from './PayrollPayslipService';
</script>