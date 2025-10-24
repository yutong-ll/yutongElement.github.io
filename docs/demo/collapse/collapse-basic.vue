<template>
  <div class="demo-collapse-basic">
    <h3>基础用法</h3>
    <p>默认情况下, Collapse 组件支持同时展开多个面板。</p>

    <Collapse v-model="activeNames">
      <CollapseItem title="面板 1" name="1">
        <div class="content">
          这是面板 1 的内容，你可以在这里放置任意 HTML 内容。
        </div>
      </CollapseItem>
      <CollapseItem title="面板 2" name="2">
        <div class="content">
          这是面板 2 的内容，支持多行文本和其他元素。
        </div>
      </CollapseItem>
      <CollapseItem title="面板 3" name="3">
        <div class="content">
          这是面板 3 的内容，可以包含列表、按钮等组件。
          <ul>
            <li>项目 1</li>
            <li>项目 2</li>
            <li>项目 3</li>
          </ul>
        </div>
      </CollapseItem>
    </Collapse>

    <div class="button-group">
      <Button @click="handleOpen">打开全部</Button>
      <Button @click="handleClose">关闭全部</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Collapse from '../../../src/components/Collapse/Collapse_.vue'
import CollapseItem from '../../../src/components/Collapse/Collapse_Item.vue'
import Button from '../../../src/components/Button/Button.vue'

type NameType = string | number

const activeNames = ref<NameType[]>(['1'])

const handleOpen = () => {
  activeNames.value = ['1', '2', '3']
}

const handleClose = () => {
  activeNames.value = []
}
</script>

<style scoped>
.demo-collapse-basic {
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

.content {
  padding: 10px 0;
  line-height: 1.6;
}

.content ul {
  margin: 10px 0;
  padding-left: 20px;
}

.button-group {
  margin-top: 20px;
}

.button-group :deep(.ve-button) {
  margin-right: 10px;
}
</style>
