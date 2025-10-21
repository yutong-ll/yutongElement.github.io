<template>
  <div class="vk-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseEmits } from './types'
import { CollapseContextKey } from './types'
import { CollapseProps } from './types'
defineOptions({
  name: 'VKCollapse'
})
const props = defineProps(CollapseProps)
const emit = defineEmits<CollapseEmits>()
// provide
const activeNames = ref<NameType[]>(props.modelValue)
watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
if (props.accordion && activeNames.value.length > 1) {
  console.warn('VKCollapse: accordion mode only support one item at a time')
}
const handleClick = (item: NameType) => {
  // 手风琴模式
  if (props.accordion) {
    activeNames.value = activeNames.value[0] === item ? [] : [item]
  } else {
    // 展开关闭逻辑
    if (activeNames.value.includes(item)) {
      activeNames.value = activeNames.value.filter((name) => name !== item)
    } else {
      activeNames.value.push(item)
    }
  }
  emit('update:modelValue', activeNames.value)
  emit('change', activeNames.value)
}
provide(CollapseContextKey, {
  activeNames,
  handleClick
})

</script>
