<template>
  <div class="vk-collapse-item" :class="{
    'is-disabled': disabled
  }">
    <div class="vk-collapse-item__header" :class="{
      'is-disabled': disabled,
      'is-active': isActive,
    }" id=" `item-header-${name}`" @click="handleClick">
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle" />
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="vk-collapse-item__wrapper" v-show="isActive">
        <div class="vk-collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'
import { CollapseItemProps } from './types'
import { CollapseContextKey } from './types'
import type { CollapseContext } from './types'
import { computed, inject } from 'vue'
import Icon from '../Icon/Icon.vue'

const props = defineProps(CollapseItemProps)
defineOptions({
  name: 'VKCollapseItem'
})
// inject
const collapseContext = inject(CollapseContextKey)
// handleclick
const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name)
})
const handleClick = () => {
  if (props.disabled) { return }
  collapseContext?.handleClick(props.name)
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }

}

</script>
<style scoped lang="scss">
.vk-collapse-item_header {
  font-size: 30px;
}
</style>
