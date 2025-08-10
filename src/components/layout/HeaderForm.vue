<template>
    <header class="app-header">
        <div class="main-header-container container-fluid">
            <div class="header-content-left">
                <div class="header-element">
                    <div class="horizontal-logo">
                    </div>
                </div>
                <div class="header-element">
                    <a aria-label="Hide Sidebar"
                        class="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                        data-bs-toggle="sidebar" href="javascript:void(0);">
                        <span></span>
                    </a>
                </div>
            </div>
            <div class="header-content-right">
                <div class="header-element">
                    <a href="#" class="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown"
                        data-bs-auto-close="outside" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <div class="d-sm-block d-none">
                                <p class="fw-semibold mb-0 lh-1" v-show="fullName"> {{ fullName }} </p>
                                <span class="op-7 fw-normal d-block fs-11" v-show="personalCode"> کد پرسنلی :
                                    {{ personalCode }} </span>
                            </div>
                            <div class="ms-sm-2 ms-0">
                                <img src="/assets/img/face.jpg" alt="img" width="32" height="32" class="rounded-circle">
                            </div>
                        </div>
                    </a>
                    <ul class="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                        aria-labelledby="mainHeaderProfile">
                        <li>
                            <a class="dropdown-item d-flex" asp-area="Setting" asp-controller="Password"
                                asp-action="Index">
                                <i class="ti ti-lock fs-18 me-2 op-7"></i> رمز عبور
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex" asp-area="Setting" asp-controller="Account"
                                asp-action="Index">
                                <i class="ti ti-user-circle fs-18 me-2 op-7"></i> حساب کاربری
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex" @click="logout">
                                <i class="ti ti-logout fs-18 me-2 op-7"></i>خروج از حساب کاربری
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { get, userUrl } from '@/config/apiConfig'

const router = useRouter()
const fullName = ref('')
const personalCode = ref('')

function logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    router.push('/login')
}

getCurrentUser()

async function getCurrentUser() {
    const response = await get(`${userUrl}/me`);
    var data = await response.json()
    fullName.value = data.name
    personalCode.value = data.personalCode
}


</script>