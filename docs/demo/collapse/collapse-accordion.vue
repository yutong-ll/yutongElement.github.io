<template>
  <div class="demo-collapse-accordion">
    <h3>手风琴模式</h3>
    <p>设置 <code>accordion</code> 属性后，同一时间只能展开一个面板。</p>

    <Collapse v-model="activeName" accordion>
      <CollapseItem title="面板 1" name="1">
        <div class="content">
          这是手风琴模式下的面板 1 内容。
          <br />
          手风琴模式确保同一时间只有一个面板处于展开状态。
        </div>
      </CollapseItem>
      <CollapseItem title="面板 2" name="2">
        <div class="content">
          这是手风琴模式下的面板 2 内容。
          <br />
          点击其他面板会自动收起当前打开的面板。
        </div>
      </CollapseItem>
      <CollapseItem title="面板 3" name="3">
        <div class="content">
          这是手风琴模式下的面板 3 内容。
          <br />
          这种模式适合需要节省空间且内容具有排他性的场景。
        </div>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '../../../src/components/Collapse/Collapse_.vue'
import CollapseItem from '../../../src/components/Collapse/Collapse_Item.vue'
type NameType = string | number

const activeName = ref<NameType>('1')
</script>

<style scoped>
.demo-collapse-accordion {
  padding: 20px;
}

h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
}

p {
  margin: 0 0 20px 0;
  color: #666;
}

code {
  background-color: #f5f5f5;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: monospace;
}

.content {
  padding: 10px 0;
  line-height: 1.6;
}
</style>
