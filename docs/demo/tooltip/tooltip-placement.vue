<template>
  <div class="demo-block placement-demo">
    <div style="margin-bottom: 20px;">
      <Tooltip content="顶部" placement="top">
        <Button>顶部</Button>
      </Tooltip>
    </div>

    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
      <Tooltip content="左侧" placement="left">
        <Button>左侧</Button>
      </Tooltip>

      <Tooltip content="右侧" placement="right">
        <Button>右侧</Button>
      </Tooltip>
    </div>

    <div>
      <Tooltip content="底部" placement="bottom">
        <Button>底部</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>

<style scoped>
.placement-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}
</style>
