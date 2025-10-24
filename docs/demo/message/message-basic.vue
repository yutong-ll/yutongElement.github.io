<template>
  <div class="message-demo">
    <div class="demo-section">
      <h3>不同类型的消息</h3>
      <div class="button-group">
        <Button @click="showSuccessMessage">成功消息</Button>
        <Button @click="showInfoMessage">信息消息</Button>
        <Button @click="showWarningMessage">警告消息</Button>
        <Button @click="showDangerMessage">错误消息</Button>
      </div>
    </div>

    <div class="demo-section">
      <h3>可关闭的消息</h3>
      <div class="button-group">
        <Button @click="showClosableMessage">可关闭消息</Button>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义时长的消息</h3>
      <div class="button-group">
        <Button @click="showLongMessage">5秒后关闭</Button>
        <Button @click="showForeverMessage">不自动关闭</Button>
      </div>
    </div>

    <div class="demo-section">
      <h3>消息操作</h3>
      <div class="button-group">
        <Button @click="showMultipleMessages">同时显示多条消息</Button>
        <Button @click="closeAllMessages">关闭所有消息</Button>
      </div>
    </div>

    <div class="demo-tips">
      <p>• 鼠标悬停在消息上可以暂停自动关闭</p>
      <p>• 按 ESC 键可以关闭当前显示的消息</p>
      <p>• 多条消息会自动堆叠显示</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../../src/components/Button/Button.vue'
import { createMessage, closeAll } from '../../../src/components/Message/method'

defineOptions({
  name: 'MessageBasic'
})

const showSuccessMessage = () => {
  createMessage({
    message: '这是一条成功消息',
    type: 'success'
  })
}

const showInfoMessage = () => {
  createMessage({
    message: '这是一条信息消息',
    type: 'info'
  })
}

const showWarningMessage = () => {
  createMessage({
    message: '这是一条警告消息',
    type: 'warning'
  })
}

const showDangerMessage = () => {
  createMessage({
    message: '这是一条错误消息',
    type: 'danger'
  })
}

const showClosableMessage = () => {
  createMessage({
    message: '这是一条可关闭的消息',
    showClose: true
  })
}

const showLongMessage = () => {
  createMessage({
    message: '这条消息将在5秒后关闭',
    duration: 5000
  })
}

const showForeverMessage = () => {
  createMessage({
    message: '这条消息不会自动关闭，需要手动关闭',
    duration: 0,
    showClose: true
  })
}

const showMultipleMessages = () => {
  createMessage({
    message: '这是第一条消息',
    type: 'info'
  })

  createMessage({
    message: '这是第二条消息',
    type: 'success',
    duration: 4000
  })

  createMessage({
    message: '这是第三条消息',
    type: 'warning',
    duration: 6000
  })
}

const closeAllMessages = () => {
  closeAll()
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

.demo-tips {
  padding: 15px 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.demo-tips p {
  margin: 5px 0;
  font-size: 13px;
  color: #909399;
}
</style>
