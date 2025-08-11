<template>
    <PageRoute :breadcrumbs="[
        { text: 'تنظیمات', link: '' },
        { text: 'حساب کاربری', link: '/Setting/UserAccount' }
    ]" />

    <div class="row">
        <div class="col-xl-12">
            <form class="card custom-card" @submit.prevent="submitForm">
                <div class="card-header justify-content-between">
                    <div class="card-title"> ویرایش اطلاعات کاربری </div>
                </div>
                <div class="card-body">
                    <div class="p-sm-3 p-0">
                        <div class="mb-4 d-flex align-items-center justify-content-center flex-column">
                            <!-- <div class="mb-2 position-relative">
                                <span class="avatar avatar-xxl avatar-rounded">
                                    <img :src="image" alt="" id="profile-img" class="img-fluid" style="object-fit: cover;">
                                </span>
                                <input type="file" name="Image" class="d-none" id="profile-change" accept="image/*">
                            </div>
                            <div class="btn-group">
                                <button id="UploadImage" type="button" class="btn btn-sm btn-success">
                                    آپلود تصویر
                                </button>
                                <button id="RemoveImage" type="button" class="btn btn-sm btn-danger">
                                    حذف تصویر
                                </button>
                            </div> -->
                            <div class="mb-2 position-relative">
                                <span class="avatar avatar-xxl avatar-rounded">
                                    <img v-if="image" :src="image" alt="پروفایل" id="profile-img" class="img-fluid"
                                        style="object-fit: cover;">
                                    <span v-else class="text-muted">عکسی انتخاب نشده</span>
                                </span>

                                <input ref="fileInput" type="file" name="Image" class="d-none" accept="image/*"
                                    @change="onFileChange">
                            </div>

                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-success" @click="triggerFileInput">
                                    آپلود تصویر
                                </button>
                                <button type="button" class="btn btn-sm btn-danger" @click="removeImage"
                                    :disabled="!image">
                                    حذف تصویر
                                </button>
                            </div>
                        </div>

                        <div class="row gy-4 mb-4">
                            <div class="col-xl-6">
                                <label class="form-label">نام و نام خانوادگی</label>
                                <input v-model="fullName" type="text" class="form-control readonly" readonly>
                            </div>
                            <div class="col-xl-6">
                                <label class="form-label">کد ملی</label>
                                <input v-model="nationalCode" type="text" class="form-control readonly" readonly>
                            </div>
                        </div>
                        <div class="row gy-4 mb-4">
                            <div class="col-xl-6">
                                <label class="form-label">کد پرسنلی</label>
                                <input v-model="personalCode" type="text" class="form-control readonly" readonly>
                            </div>
                            <div class="col-xl-6">
                                <label class="form-label">شماره همراه</label>
                                <input v-model="phoneNumber" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-center">
                    <div class="btn-group">
                        <button type="submit" class="btn btn-sm btn-success">ذخیره اطلاعات</button>
                        <button @click="cancel" type="button" class="btn btn-sm btn-danger">انصراف</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted} from 'vue'
import PageRoute from '@/components/common/PageRoute.vue';
import { 
    fullName, nationalCode, personalCode, phoneNumber, oldPhoneNumber, image, getUser, SaveUserChanged,
    fileInput, triggerFileInput, onFileChange, removeImage
 } from '@/modules/Setting/UserAccount/UserAccountService'

onMounted(() => {
    getUser()
})

function submitForm() {
    SaveUserChanged(personalCode, phoneNumber)
}

function cancel() {
    phoneNumber.value = oldPhoneNumber.value
}

// const fileInput = ref(null)

// function triggerFileInput() {
//     fileInput.value.click()
// }

// function onFileChange(event) {
//     const file = event.target.files[0]
//     if (file) {
//         image.value = URL.createObjectURL(file)
//     }
// }

// function removeImage() {
//       image.value = null
//       fileInput.value.value = null
// }


</script>