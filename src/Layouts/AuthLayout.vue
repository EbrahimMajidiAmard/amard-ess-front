<template>
  <div class="container">
    <router-view />
  </div>
</template>


<script setup>
import { onMounted } from 'vue'
onMounted(async () => {
  if (!sessionStorage.getItem('reloaded')) {
    sessionStorage.setItem('reloaded', 'true')
    window.location.reload()
  } else {
    sessionStorage.removeItem('reloaded')
    const scripts = ['./assets/lib/bootstrap/js/bootstrap.bundle.min.js']

    scripts.forEach(src => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
    })
  }
})
</script>