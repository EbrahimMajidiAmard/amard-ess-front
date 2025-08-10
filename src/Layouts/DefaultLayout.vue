<template>
  <div class="page">
    <Header />
    <Aside />
    <div class="main-content app-content">
      <div class="container-fluid">
        <router-view />
      </div>
    </div>
  </div>
  <Footer />

  <div class="scrollToTop"><span class="arrow">
      <i class="ri-arrow-up-s-fill fs-20"></i>
    </span>
  </div>
  <div id="responsive-overlay"></div>
</template>

<script setup>
import Header from '@/components/layout/HeaderForm.vue'
import Aside from '@/components/layout/AsideFrom.vue'
import Footer from '@/components/layout/FooterForm.vue'

import { onMounted } from 'vue'
onMounted(async () => {
  if (!sessionStorage.getItem('reloaded')) {
    sessionStorage.setItem('reloaded', 'true')
    window.location.reload()
  } else {
    sessionStorage.removeItem('reloaded')
    const scripts = [
      '/assets/lib/bootstrap/js/bootstrap.bundle.min.js',
      '/assets/lib/@popperjs/core/umd/popper.min.js',
      '/assets/js/defaultmenu.min.js']

    scripts.reduce((prev, src) => {
      return prev.then(() => new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        document.body.appendChild(script)
      }))
    }, Promise.resolve())
  }
})
</script>