<template>
    <aside class="app-sidebar sticky" id="sidebar">
        <div class="main-sidebar-header">
            <div class="header-logo">
                <small>سامانه خدمات پرسنلی</small>
            </div>
        </div>
        <div class="main-sidebar" id="sidebar-scroll">
            <nav class="main-menu-container nav nav-pills flex-column sub-open">
                <div class="slide-left" id="slide-left">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                    </svg>
                </div>
                <ul class="main-menu">
                    <li class="slide has-sub">
                        <a href="javascript:void(0);" class="side-menu__item">
                            <i class="bx bx-calculator side-menu__icon"></i>
                            <span class="side-menu__label"> حقوق و دستمزد </span>
                            <i class="fe fe-chevron-right side-menu__angle"></i>
                        </a>
                        <ul class="slide-menu child1">
                            <li class="slide">
                                <router-link to="/Payroll/Payslip" class="side-menu__item" active-class="active">فیش حقوقی</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="slide has-sub">
                        <a href="javascript:void(0);" class="side-menu__item">
                            <i class="bx bx-folder side-menu__icon"></i>
                            <span class="side-menu__label"> کارگزینی </span>
                            <i class="fe fe-chevron-right side-menu__angle"></i>
                        </a>
                        <ul class="slide-menu child1">
                            <li class="slide">
                                <router-link to="/HumanResources/RecruitmentRules" class="side-menu__item" active-class="active"> احکام کارگزینی
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="slide has-sub">
                        <a href="javascript:void(0);" class="side-menu__item">
                            <i class="bx bx-cog side-menu__icon"></i>
                            <span class="side-menu__label"> تنظیمات </span>
                            <i class="fe fe-chevron-right side-menu__angle"></i>
                        </a>
                        <ul class="slide-menu child1">
                            <li class="slide">
                                <router-link to="/Payroll/Payslip" class="side-menu__item" active-class="active"> حساب کاربری
                                </router-link>
                            </li>
                            <li class="slide">
                                <router-link to="/Payroll/Payslip" class="side-menu__item" active-class="active"> رمز عبور </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="slide-right" id="slide-right">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                </div>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(() => {
            const activeLinks = document.querySelectorAll('.router-link-active');
            activeLinks.forEach(link => {
                const parentSubMenu = link.closest('.slide-menu');
                const parentLi = link.closest('.has-sub');
                if (parentSubMenu && parentLi) {
                    parentSubMenu.style.display = 'block';
                    parentLi.classList.add('open');
                }
            });
        });
    }
}
</script>