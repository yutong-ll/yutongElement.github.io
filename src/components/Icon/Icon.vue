<template>
  <!-- $attrs 是 Vue 3 中提供的一个特殊属性，用于将组件实例的所有属性（包括事件监听器）绑定到组件的根元素上。解决  inheritAttrs: false -->
  <i class="vk-icon" :class="{ [`vk-icon--${type}`]: type }" :style="colorStyle" v-bind="$attrs">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>
<script setup lang="ts">
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'
defineOptions({
  name: 'VKIcon',
  // inheritAttrs: false 是 Vue 组件中的一个配置选项，它的作用是阻止组件根元素自动继承未被 props 声明的属性。
  inheritAttrs: false,
})
const props = defineProps<IconProps>()
//computed 包裹，确保更新后会变化
const filteredProps = computed(() => omit(props, ['type', 'color']))
const colorStyle = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
