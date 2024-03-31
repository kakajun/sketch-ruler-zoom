<template>
  <div class="ruler-room">
    <div class="tool-box">
    {{ scale }}
    <button @click="clickopenGuide">打开</button>
    </div>

        <div
      id="view-box"
      ref="viewBoxRef"
      class="view-box"
      :style="viewStyle"
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
          id="canvas"
          ref="canvasRef"
          class="canvas"
          
          data-type="page"
        >
           <slot></slot>
        </div>
      </div>
    </div>
    <lineGuides :pageZoom="pageZoom" v-model:openGuide="openGuide"></lineGuides>
  </div>

</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import lineGuides from './line-guides.vue';
import addMouseWheel from '../hooks/addMouseWheel'
import Panzoom from 'panzoom'
const viewBoxRef = ref(null)
const pageZoom = ref(1) // 缩放比例-初始值
let scale = ref(1) // 缩放比例-后面手动缩放
const width = ref(1200)
const height=ref(1000)
const pageTop = ref(0)
const openGuide=ref(false)
const padding = ref(24) // 画布内边距

const clickopenGuide=()=>{
  openGuide.value=!openGuide.value
}
const bookWidth = computed(() => {
  return width.value * pageZoom.value
})
const bookHeight = computed(() => {
  return height.value * pageZoom.value
})

const viewStyle=computed(() => {
  return {
    paddingTop: pageTop.value + 'px',
    transform: `scale(${scale.value})`
  }
})

/**
 * @description:设置顶部距离
 */
const setcPaddingTop = () => {
  const wrapperHeight = (viewBoxRef.value && viewBoxRef.value.offsetHeight) || 0
  const paddingMin = 0
  let paddingTop = (wrapperHeight - bookHeight.value - 2 * padding.value) / 2
  pageTop.value = Math.max(paddingTop, paddingMin)
}
let panzoomFn
const initPanzoom = () => {
  // document: https://github.com/timmywil/panzoom
  const elem = document.querySelector('#canvas')
  panzoomFn = Panzoom(elem, {
    noBind: true,
    cursor: 'default',
    smoothScroll: true,
    maxScale: 5,
    step: 0.1,
    minScale: 0.01
  })
  elem.addEventListener('panzoomchange', (event) => {
    scale.value = event.detail.scale
  })
  elem.addEventListener('pointerup', (e) => {
    panzoomFn.handleUp(e)
  })
}

onMounted(() => {
  initPanzoom()
  addMouseWheel('view-box', (isDown) => {
    scale.value = isDown ? scale.value - 0.01 : scale.value + 0.01
    panzoomFn.zoom(scale.value)
    setTimeout(() => {
    setcPaddingTop()
  }, 0)
  })
})


</script>
<style scoped>
.ruler-room{
  position: relative;
}
.tool-box{
  position: absolute;
  top: 0;
  left: 0;

}
.view-box {
  position: relative;
  width: 100%;
  /* height: calc(100vh - 68px); */
  overflow: auto;
}

.view {
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
}

.canvas {
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  position: relative;
}

</style>