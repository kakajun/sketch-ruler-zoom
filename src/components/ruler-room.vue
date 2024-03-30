<!--  -->
<template>
  <div>
    <div
      id="view-box"
      ref="viewBoxRef"
      class="view-box bookedit-view lc-ruler-content"
      :style="{ padding: pageTop + 'px' + ' 0' }"
    >
      <div
        id="view-wrap"
        class="view"
        :style="{
          padding: padding + 'px',
          width: bookWidth + padding * 2 + 'px',
          height: bookHeight + padding * 2 + 'px'
        }"
      >
        <div
          class="shelter"
          :style="{
            width: Math.floor(bookWidth) + 'px',
            height: Math.floor(bookHeight) + 'px'
          }"
        >
        </div>
        <div
          class="shelter-bg transparent-bg"
          :style="{
            width: Math.floor(bookWidth) + 'px',
            height: Math.floor(bookHeight) + 'px'
          }"
        >
        </div>
        <div
          id="canvas"
          ref="canvasRef"
          class="canvas"
          data-type="page"
  
        >
        
        </div>
          <slot></slot>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
const pageZoom = ref(1)
const width = ref(0)
const height=ref(0)
const pageTop = ref(0)
const padding = ref(24) // 画布内边距
const bookWidth = computed(() => {
  return width.value * pageZoom.value
})
const bookHeight = computed(() => {
  return height.value * pageZoom.value
})
</script>
<style scoped>
</style>