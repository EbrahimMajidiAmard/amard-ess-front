<template>
    <div class="page error-bg" id="particles-js"> <!-- Start::error-page -->
    <div class="error-page">
        <div class="container">
            <div class="text-center p-5 my-auto">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-xl-7">
                        <p class="error-text mb-sm-0 mb-2">۴۰۴</p>
                        <p class="fs-18 fw-semibold mb-3">صفحه‌ای که دنبال آن هستید در دسترس نیست.</p>
                        <div class="row justify-content-center mb-5">
                            <div class="col-xl-6">
                                <p class="mb-0 op-7">از این مشکل متاسفیم، صفحه‌ای که قصد دسترسی به آن را دارید حذف شده یا هرگز وجود نداشته است.</p>
                            </div>
                        </div>
                        <button @click="$router.back()" class="btn btn-primary">
                            <i class="ri-arrow-left-line align-middle me-1 d-inline-block"></i>
                            بازگشت به صفحه قبلی
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script setup>
</script>