<template>
  <div class="demo-collapse-disabled">
    <h3>禁用状态</h3>
    <p>通过设置 <code>disabled</code> 属性可以禁用某个面板，禁用的面板无法被打开或关闭。</p>

    <Collapse v-model="activeNames">
      <CollapseItem title="正常面板" name="1">
        <div class="content">
          这是一个可以正常交互的面板。
        </div>
      </CollapseItem>
      <CollapseItem title="禁用的面板" name="2" disabled>
        <div class="content">
          这是一个禁用的面板，无法被打开或关闭。
        </div>
      </CollapseItem>
      <CollapseItem title="正常面板" name="3">
        <div class="content">
          这是另一个可以正常交互的面板。
        </div>
      </CollapseItem>
    </Collapse>

    <h3>动态禁用</h3>
    <p>可以通过数据绑定动态控制面板的禁用状态。</p>

    <div class="button-group">
      <Button @click="toggleDisable">切换禁用状态</Button>
    </div>

    <Collapse v-model="activeNames2" style="margin-top: 10px;">
      <CollapseItem title="动态控制的面板" name="1" :disabled="isDisabled">
        <div class="content">
          点击上方按钮可以切换此面板的禁用状态。
        </div>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '../../../src/components/Collapse/Collapse_.vue'
import CollapseItem from '../../../src/components/Collapse/Collapse_Item.vue'
import Button from '../../../src/components/Button/Button.vue'
// import VKCollapse from './components/Collapse/Collapse_.vue'
// import VKCollapseItem from './components/Collapse/Collapse_Item.vue'
type NameType = string | number

const activeNames = ref<NameType[]>(['1'])
const activeNames2 = ref<NameType[]>(['1'])
const isDisabled = ref(false)

const toggleDisable = () => {
  isDisabled.value = !isDisabled.value
}
</script>

<style scoped>
.demo-collapse-disabled {
  padding: 20px;
}

h3 {
  margin: 20px 0 10px 0;
  font-size: 16px;
  color: #333;
}

h3:first-child {
  margin-top: 0;
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

.button-group {
  margin-bottom: 10px;
}
</style>
