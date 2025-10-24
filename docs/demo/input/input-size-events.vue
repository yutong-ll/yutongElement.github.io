<template>
  <div class="input-demo">
    <div class="demo-section">
      <h3>尺寸控制</h3>
      <div class="demo-item">
        <Input v-model="largeValue" placeholder="大尺寸" size="large" />
      </div>
      <div class="demo-item">
        <Input v-model="defaultValue" placeholder="默认尺寸" />
      </div>
      <div class="demo-item">
        <Input v-model="smallValue" placeholder="小尺寸" size="small" />
      </div>
    </div>

    <div class="demo-section">
      <h3>事件响应</h3>
      <div class="demo-item">
        <Input v-model="eventValue" placeholder="输入内容触发事件" @input="handleInput" @change="handleChange"
          @focus="handleFocus" @blur="handleBlur" />
      </div>

      <div class="event-log">
        <h4>事件日志：</h4>
        <div v-if="eventLogs.length === 0" class="empty-log">暂无事件记录</div>
        <div v-for="(log, index) in eventLogs.slice(-5)" :key="index" class="log-item">
          {{ log }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '../../../src/components/Input/Input.vue'
import { ref } from 'vue'

defineOptions({
  name: 'InputSizeEvents'
})

const largeValue = ref('')
const defaultValue = ref('')
const smallValue = ref('')
const eventValue = ref('')
const eventLogs = ref<string[]>([])

const addEventLog = (event: string, value?: string) => {
  const timestamp = new Date().toLocaleTimeString()
  const log = `${timestamp} - ${event}${value !== undefined ? `: ${value}` : ''}`
  eventLogs.value.push(log)
}

const handleInput = (value: string) => {
  addEventLog('input', value)
}

const handleChange = (value: string) => {
  addEventLog('change', value)
}

const handleFocus = (event: FocusEvent) => {
  addEventLog('focus')
}

const handleBlur = (event: FocusEvent) => {
  addEventLog('blur')
}
</script>

<style scoped>
.input-demo {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h3 {
  font-size: 16px;
  color: #303133;
  font-weight: 500;
  margin: 0;
}

h4 {
  font-size: 14px;
  color: #606266;
  font-weight: 500;
  margin: 0 0 10px 0;
}

.demo-item {
  display: flex;
  gap: 10px;
}

.vk-input {
  width: 100%;
}

.event-log {
  padding: 15px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fafafa;
  max-height: 200px;
  overflow-y: auto;
}

.log-item {
  font-size: 12px;
  color: #909399;
  margin-bottom: 5px;
  padding: 2px 0;
}

.empty-log {
  font-size: 12px;
  color: #c0c4cc;
  text-align: center;
  padding: 20px 0;
}
</style>
