<template>
  <div>
    <div class="h-8 sm:h-24 md:h-64" style="overflow: hidden;" >
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M-0.27,17.27 C251.41,204.77 339.45,-33.05 511.00,30.09 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: white;"></path>
      </svg>
    </div>
    <div class="content-start">
     <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})

</script>

<style>
.content-start {
  @apply bg-white w-screen relative h-screen pl-2 pr-2 sm:pl-0 sm:pr-0;
}
</style>
