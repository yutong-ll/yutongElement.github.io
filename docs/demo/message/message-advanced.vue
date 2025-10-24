<template>
  <div class="message-demo">
    <div class="demo-section">
      <h3>手动控制消息</h3>
      <div class="button-group">
        <Button @click="showManualMessage">创建可手动关闭的消息</Button>
        <Button type="primary" @click="closeManualMessage" :disabled="!messageInstance">
          关闭手动创建的消息
        </Button>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义内容的消息</h3>
      <div class="button-group">
        <Button @click="showCustomContentMessage">显示带自定义内容的消息</Button>
      </div>
    </div>

    <div class="demo-section">
      <h3>带偏移量的消息</h3>
      <div class="button-group">
        <Button @click="showOffsetMessage">显示带偏移量的消息</Button>
      </div>
    </div>

    <div class="demo-section">
      <h3>动态内容的消息</h3>
      <div class="button-group">
        <Button @click="showDynamicMessage">显示倒计时消息</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../../src/components/Button/Button.vue'
import { createMessage } from '../../../src/components/Message/method'
import type { MessageContext } from '../../../src/components/Message/types.ts'
import { ref, h } from 'vue'

defineOptions({
  name: 'MessageAdvanced'
})

const messageInstance = ref<MessageContext | null>(null)

// 显示可手动关闭的消息
const showManualMessage = () => {
  messageInstance.value = createMessage({
    message: '这是一条可以通过按钮手动关闭的消息',
    duration: 0,
    showClose: true,
    type: 'info'
  })
}

// 手动关闭消息
const closeManualMessage = () => {
  if (messageInstance.value) {
    messageInstance.value.destory()
    messageInstance.value = null
  }
}

// 显示带自定义内容的消息
const showCustomContentMessage = () => {
  // 创建一个包含图标的消息内容
  // 由于我们不能确定项目是否支持JSX，这里使用字符串形式的HTML
  const customContent = `
    <div style="display: flex; align-items: center;">
      <svg style="width: 20px; height: 20px; margin-right: 8px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
        <polyline points="21 3 12 12 9 10"/>
      </svg>
      <span>自定义内容消息示例</span>
    </div>
  `

  createMessage({
    message: customContent,
    type: 'success',
    duration: 4000
  })
}

// 显示带偏移量的消息
const showOffsetMessage = () => {
  createMessage({
    message: '这是一条带自定义偏移量的消息',
    type: 'warning',
    offset: 100 // 距离顶部100px
  })
}

// 显示带倒计时的动态内容消息
const showDynamicMessage = () => {
  let seconds = 5
  const message = `此消息将在 ${seconds} 秒后自动关闭`

  // 创建初始消息
  const instance = createMessage({
    message,
    type: 'info',
    duration: 0 // 禁用自动关闭，由我们自己控制
  })

  // 创建倒计时定时器
  const timer = setInterval(() => {
    seconds--

    // 由于我们不能直接修改已创建消息的内容，
    // 这里我们选择关闭旧消息并创建一条新的倒计时消息
    if (instance) {
      instance.destory()
    }

    if (seconds > 0) {
      // 创建新的倒计时消息
      createMessage({
        message: `此消息将在 ${seconds} 秒后自动关闭`,
        type: 'info',
        duration: 0
      })
    } else {
      // 倒计时结束，清除定时器
      clearInterval(timer)
    }
  }, 1000)
}
</script>

<style scoped>
.message-demo {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  background-color: #fafafa;
}

h3 {
  font-size: 16px;
  color: #303133;
  font-weight: 500;
  margin: 0;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
