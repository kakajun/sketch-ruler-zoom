<template>
  <div></div>
</template>

<script setup>
import { watch, ref } from 'vue'
import Guides from '@scena/guides'

const props = defineProps({
  openGuide: {
    type: Boolean,
    default: false
  },
  pageZoom:Number
})
const container = ref('view-box')
let guidesTop = ref(null)
let guidesLeft = ref(null)
watch(
  () => props.openGuide,
  (open) => {
    console.log('open', open)
    open ? render() : destroy()
  }
)
watch(
  () => props.pageZoom,
  (val) => {
    console.log('zoom', val);
    changeScroll()
  }
)
function destroy() {
  guidesTop.value.destroy()
  guidesLeft.value.destroy()
  guidesTop.value = null
  guidesLeft.value = null
}
function render() {
  const sameParams = {
    backgroundColor: '#f9f9fa',
    lineColor: '#bec2c7',
    textColor: '#999999',
    // direction: 'start',
    // height: 30,
    displayDragPos: true,
    dragPosFormat: (v) => v + 'px'
  }
  guidesTop.value = new Guides(document.getElementById(container.value), {
    ...sameParams,
    type: 'horizontal',
    className: 'my-horizontal'
  }).on('changeGuides', (e) => {
    console.log(e, e.guides)
  })

  guidesLeft.value = new Guides(document.getElementById(container.value), {
    ...sameParams,
    type: 'vertical',
    className: 'my-vertical'
  }).on('changeGuides', (e) => {
    console.log(e, e.guides)
  })
  changeScroll()
  console.log("3333333333");
}
function changeScroll() {
  if (guidesTop.value && guidesLeft.value) {
    const zoom = props.pageZoom
    guidesTop.value.zoom = zoom
    guidesLeft.value.zoom = zoom
    if (zoom < 0.9) {
      guidesTop.value.unit = Math.floor(1 / zoom) * 50
      guidesLeft.value.unit = Math.floor(1 / zoom) * 50
    }
    setTimeout(() => {
      const el = document.getElementById('view-wrap')
      const left = 60 + (el?.offsetLeft || 0)
      const top = 30 + (el?.offsetTop || 0)
      guidesTop.value.scroll(-left / zoom)
      guidesTop.value.scrollGuides(-top / zoom)
      guidesLeft.value.scroll(-top / zoom)
      guidesLeft.value.scrollGuides(-(left - 30) / zoom)
    }, 300)
  }
}
</script>

<style >
.my-horizontal,
.my-vertical {
  position: absolute !important;
  z-index: 99;
}

.my-horizontal {
  left: 0px;
  top: 0;
  width: calc(100% - 30px);
  height: 30px !important;
}

.my-vertical {
  top: 30px;
  left: 0px;
  height: calc(100% - 35px);
  width: 30px !important;
}
</style>
