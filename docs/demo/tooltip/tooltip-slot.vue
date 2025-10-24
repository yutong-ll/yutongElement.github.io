<template>
  <div class="demo-block">
    <Tooltip>
      <Button>带HTML的提示</Button>
      <template #content>
        <div>
          <p style="color: #f00;">红色文本</p>
          <p>提示内容可以包含<strong>HTML</strong></p>
        </div>
      </template>
    </Tooltip>
  </div>
</template>

<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
