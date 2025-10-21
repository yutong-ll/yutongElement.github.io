<template>
  <div class="vk-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <div class="vk-tooltip__popper" ref="popperNode" v-if="isOpen">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onUnmounted, defineOptions } from 'vue'
import type { Instance } from '@popperjs/core'
import { ref, watch, reactive } from 'vue'
import { createPopper } from '@popperjs/core'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import useClickOuterside from '../../hooks/useClickOutside'

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
})

const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const triggerNode = ref<HTMLDivElement>()
const popperNode = ref<HTMLDivElement>()
const popperContainerNode = ref<HTMLDivElement>()
let popperInstance: null | Instance = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})

defineOptions({
  name: 'VKTooltip'
})


const open = () => {
  isOpen.value = true
  emits('visible-change', true)
}
const close = () => {
  isOpen.value = false
  emits('visible-change', false)
}
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}
useClickOuterside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close()
  }
})
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
console.log('VKTooltip', props)
console.log('VKTooltip', props.manual)
if (!props.manual) {
  attachEvents()
}
watch(() => props.manual, (isManual) => {
  if (isManual) {
    events = {}
    outerEvents = {}
  } else {
    attachEvents()
  }
})
watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if (newTrigger !== oldTrigger) {
    events = {}
    outerEvents = {}
    attachEvents()
  }
})
// 每次更改状态，都重新创建实例，保证位置和方向正确
watch(isOpen, (newValue) => {
  if (newValue) {
    if (triggerNode.value && popperNode.value) {
      popperInstance = createPopper(triggerNode.value, popperNode.value, {
        placement: props.placement
      })
    } else {
      popperInstance?.destroy()
    }
  }
}, { flush: 'post' })
onUnmounted(() => {
  popperInstance?.destroy()
})
defineExpose<TooltipInstance>({
  'show': open,
  'hide': close
})
</script>
