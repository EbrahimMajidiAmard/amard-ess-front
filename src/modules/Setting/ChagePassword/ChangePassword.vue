<template>
    <PageRoute :breadcrumbs="[
        { text: 'تنظیمات', link: '' },
        { text: 'رمز عبور', link: '/Setting/UserAccount' }
    ]" />

    <div class="row">
        <div class="col-xl-12">
            <form class="card custom-card" @submit.prevent="submitForm">
                <div class="card-header justify-content-between">
                    <div class="card-title"> ویرایش رمز عبور </div>
                </div>
                <div class="card-body">
                    <div class="p-sm-3 p-0">
                        <div class="row gy-4 mb-4">
                            <div class="col-12 col-sm-6 col-lg-4">
                                <label for="oldPassword" class="form-label">رمز عبور قدیم</label>
                                <div class="input-group">
                                    <input id="oldPassword" v-model="oldPassword" type="password" class="form-control">
                                    <button class="btn btn-primary" type="button"
                                        onclick="createpassword('oldPassword', this)">
                                        <i class="ri-eye-off-line align-middle"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                                <label for="newPassword" class="form-label">رمز عبور جدید</label>
                                <div class="input-group">
                                    <input id="newPassword" v-model="newPassword" type="password" class="form-control">
                                    <button class="btn btn-primary" type="button"
                                        onclick="createpassword('newPassword', this)">
                                        <i class="ri-eye-off-line align-middle"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                                <label for="repeatPassword" class="form-label">تکرار رمز عبور جدید</label>
                                <div class="input-group">
                                    <input id="repeatPassword" v-model="repeatPassword" type="password"
                                        class="form-control">
                                    <button class="btn btn-primary" type="button"
                                        onclick="createpassword('repeatPassword', this)">
                                        <i class="ri-eye-off-line align-middle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-footer d-flex justify-content-center">
                    <div class="btn-group">
                        <button type="submit" class="btn btn-sm btn-success"> تغییر رمز عبور </button>
                        <button type="button" class="btn btn-sm btn-danger" @click="cancell"> انصراف </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>
import PageRoute from '@/components/common/PageRoute.vue';
import { oldPassword, newPassword, repeatPassword, submitForm, cancell } from './ChangePasswrodService';
</script>