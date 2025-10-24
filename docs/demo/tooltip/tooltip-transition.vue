<template>
  <div class="demo-block">
    <Tooltip content="默认过渡" transition="fade">
      <Button>默认淡入淡出</Button>
    </Tooltip>

    <Tooltip content="缩放过渡" transition="scale">
      <Button type="primary">缩放效果</Button>
    </Tooltip>
  </div>
</template>

<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>

<style scoped>
/* 自定义缩放过渡样式 */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
