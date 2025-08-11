<template>
  <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
    <div class="ms-md-1 ms-0">
      <nav>
        <ol class="breadcrumb mb-0">
          <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item"
            :class="{ active: index === 0 }" aria-current="page">
            <template v-if="index >= 0">
              {{ crumb.text }}
            </template>
            <!-- <template v-else>
              <a :href="crumb.link">{{ crumb.text }}</a>
              <router-link :to="crumb.link" class="side-menu__item">{{ crumb.text }}</router-link>
            </template> -->
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<!-- <script setup>
import { defineProps } from 'vue'

defineProps({
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})
</script> -->
<script setup>
/* global defineProps */
defineProps({
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})
</script>