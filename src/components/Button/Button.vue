<!-- template模板部分:组件的 UI 结构和样式逻辑 -->
<template>
  <button ref="_ref" class="vk-button" :class="{
    [`vk-button--${type}`]: type,
    [`vk-button--${size} `]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
    'is-loading': loading
  }" :disabled="disabled || loading" :type="nativeType" :autofocus="autofocus">
    <Icon :icon="icon" v-if="icon" />
    <Icon icon="spinner" spin v-if="loading" />
    <span>
      <slot />
    </span>
  </button>
</template>

<!-- 定义组件属性 -->
<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../Icon/Icon.vue'
//默认是使用文件名，但是Button容易重复。
export default defineComponent({
  name: 'VKButton'
})
</script>
<!-- 组合式 API 逻辑 -->
<script setup lang="ts">
import { ref } from 'vue'
import { buttonProps } from './types'
//
defineProps(buttonProps)
// 暴露组件的属性
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>
