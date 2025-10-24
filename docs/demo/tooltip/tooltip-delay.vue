<template>
  <div class="demo-block">
    <Tooltip content="延迟显示和隐藏" :openDelay="500" :closeDelay="1000">
      <Button>延迟显示/隐藏</Button>
    </Tooltip>
  </div>
</template>

<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
