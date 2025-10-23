# Tooltip 组件

Tooltip 组件用于展示鼠标悬浮或点击元素时的提示信息，支持多种触发方式、位置配置和交互控制，适用于表单说明、操作提示等场景。


## 基础用法

Tooltip 组件通过包裹目标元素实现提示功能，可通过属性配置触发方式、内容、位置等，基础使用简单灵活。

<script setup lang="ts">
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>

### 基本展示

通过默认插槽传入触发元素，`content` 属性设置提示内容，默认 hover 触发、顶部显示。

<div class="demo-block">
  <Tooltip content="这是基础提示内容">
    <Button>Hover 显示提示</Button>
  </Tooltip>
  
  <Tooltip content="点击触发提示" trigger="click">
    <Button type="primary">Click 显示提示</Button>
  </Tooltip>
</div>