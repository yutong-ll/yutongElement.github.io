<template>
  <div class="demo-block">
    <Tooltip content="鼠标悬浮显示" trigger="hover">
      <Button>悬浮触发</Button>
    </Tooltip>

    <Tooltip content="点击显示和隐藏" trigger="click">
      <Button type="primary">点击触发</Button>
    </Tooltip>
  </div>
</template>

<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
