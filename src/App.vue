<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import VKTooltip from './components/Tooltip/Tooltip.vue'
import TheWelcome from './components/TheWelcome.vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'
import VKCollapse from './components/Collapse/Collapse_.vue'
import VKCollapseItem from './components/Collapse/Collapse_Item.vue'
import Icon from './components/Icon/Icon.vue'
import type { TooltipInstance } from './components/Tooltip/types'
import { onMounted, reactive, ref } from 'vue'
import type { Options } from '@popperjs/core'
const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)
const trigger = ref<any>('hover')
const isManual = ref(false)
const options = reactive<Partial<Options>>({
  placement: 'top',
  strategy: 'fixed',
})
onMounted(() => {
  console.log("onMounted")
  if (buttonRef.value) {
    console.log("ButtonRef", buttonRef.value.ref)
  }
})
const openedValue = ref(['a'])
const openTooltip = () => {
  tooltipRef.value?.show()
}
const closeTooltip = () => {
  tooltipRef.value?.hide()
}
</script>

<template>
  <header>
    <VKTooltip :trigger="trigger" content="这是个提示" :manual="isManual" ref="tooltipRef" :popper-options="options"
      :open-delay="500" :close-delay="500">
      <img alt="Vue logo" class="logo" src="/assets/logo.svg" width="125" height="125" />
      <!-- <template #content>
        <div>
          这是个提示
        </div>
      </template> -->
    </VKTooltip>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
    <Icon icon="user-secret" />
    <Icon icon="arrow-up" type="primary" />
    <!-- Collapse -->
    <VKCollapse v-model="openedValue" accordion>
      <VKCollapseItem name="a" title="TitleA">
        <div> this is aaaaa test </div>
      </VKCollapseItem>
      <VKCollapseItem name="b" title="TitleB">
        <div> this is bbbbb test </div>
      </VKCollapseItem>
      <VKCollapseItem name="c" title="nice cccc" disabled>
        <div> this is cccc test </div>
      </VKCollapseItem>
      {{ openedValue }}
    </VKCollapse>
    <!-- Button -->
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary" ref="buttonRef">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain @click="openTooltip">Tooltip open</Button>
    <Button type="success" plain @click="closeTooltip">Tooltip close</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />
    <a href="#">The Link</a>
  </main>
  <a href="#"> the link</a>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
