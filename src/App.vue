<script setup>
import rulerRoom from './components/ruler-room.vue'
</script>

<template>
<div class="app">
  <div class="wapper">
 <ruler-room >
        <img class="bg" src="./assets/bg.jfif"/>
      </ruler-room>
  </div>
  
</div>
</template>

<style scoped>
.app {
  width: 100%;
  display: flex;
  justify-content: center;
}
.wapper{
  background: #f5f5f5;
  width: 80%;
  height: calc(100vh - 40px);
}
.bg{
  width: 800px;
  height: 600px;
  object-fit:contain;
}
</style>

