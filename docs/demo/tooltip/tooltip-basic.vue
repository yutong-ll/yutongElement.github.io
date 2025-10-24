<template>
  <div class="demo-block">
    <Tooltip content="这是一个基础提示框">
      <Button>基础提示</Button>
    </Tooltip>

    <Tooltip content="提示内容可以很长很长很长很长很长很长很长很长很长很长很长很长">
      <Button type="primary">长文本提示</Button>
    </Tooltip>
  </div>
</template>

<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'

</script>
