<template>
    <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
            <div class="card custom-card">
                <div class="card-body pt-5 px-5">
                    <router-link to="/auth/login" class="d-inline-block mb-3 d-inline-block position-absolute end-0 top-0 m-3 fs-4 text-primary pointer">
                        <i class="ri-arrow-left-line"></i>
                    </router-link>
                    <div class="text-center mb-4">
                        <p class="h5 fw-semibold mb-2 text-center text-primary">تغییر رمز عبور</p>
                        <p class="mb-4 op-7 fw-normal text-center text-muted">سامانه خدمات پرسنلی</p>
                    </div>
                    <form class="row gy-3" @submit.prevent="submitForm">
                        <div class="col-xl-12 mb-2">
                            <label for="password" class="form-label">رمز عبور</label>
                            <div class="input-group">
                                <input id="password" v-model="password" type="password"
                                    class="form-control form-control-lg"
                                    placeholder="لطفا رمز عبور خود را وارد کنید ...">
                                <button class="btn btn-primary" type="button" onclick="createpassword('password',this)">
                                    <i class="ri-eye-off-line align-middle"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-xl-12 mb-2">
                            <label for="password1" class="form-label">تکرار رمز عبور</label>
                            <div class="input-group">
                                <input id="password1" v-model="password1" type="password"
                                    class="form-control form-control-lg"
                                    placeholder="لطفا تکرار رمز عبور خود را وارد کنید ...">
                                <button class="btn btn-primary" type="button" onclick="createpassword('password1',this)">
                                    <i class="ri-eye-off-line align-middle"></i>
                                </button>
                            </div>
                        </div>

                        <div class="col-xl-12 d-grid mt-3">
                            <!-- <button type="submit" class="btn btn-lg btn-primary">دریافت کد</button> -->
                             <router-link to="/auth/forgetPassword/verifySms" class="btn btn-lg btn-primary"> دریافت کد </router-link>
                        </div>
                    </form>
                    <div class="text-center mt-3">
                        <a href="https://www.amardco.com/"><img src="/favicon.png" alt="" title="" width="50"
                                height="50" /></a>
                        <p class="text-muted">
                            تمامی حقوق این نرم افزار متعلق به شرکت تحلیلگران آمارد می باشد.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>