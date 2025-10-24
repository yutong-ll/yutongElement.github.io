<template>
  <div class="select-demo">
    <div class="demo-section">
      <h3>禁用状态</h3>
      <div class="demo-item">
        <Select v-model="disabledValue" :options="options" placeholder="禁用状态" disabled />
      </div>
    </div>

    <div class="demo-section">
      <h3>带禁用选项</h3>
      <div class="demo-item">
        <Select v-model="withDisabledValue" :options="optionsWithDisabled" placeholder="带禁用选项" />
      </div>

      <div class="option-info">
        <p>• 北京：正常选项</p>
        <p>• 上海：禁用选项</p>
        <p>• 广州：正常选项</p>
        <p>• 深圳：禁用选项</p>
        <p>• 杭州：正常选项</p>
      </div>
    </div>

    <div class="demo-section">
      <h3>事件响应</h3>
      <div class="demo-item">
        <Select v-model="eventValue" :options="options" placeholder="选择触发事件" @change="handleChange"
          @visible-change="handleVisibleChange" />
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
import Select from '../../../src/components/Select/Select.vue'
import type { SelectOption } from '../../../src/components/Select/types.ts'
import { ref } from 'vue'

defineOptions({
  name: 'SelectDisabled'
})

const options: SelectOption[] = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' }
]

const optionsWithDisabled: SelectOption[] = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai', disabled: true },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen', disabled: true },
  { label: '杭州', value: 'hangzhou' }
]

const disabledValue = ref('')
const withDisabledValue = ref('')
const eventValue = ref('')
const eventLogs = ref<string[]>([])

const addEventLog = (event: string, value?: string) => {
  const timestamp = new Date().toLocaleTimeString()
  const log = `${timestamp} - ${event}${value !== undefined ? `: ${value}` : ''}`
  eventLogs.value.push(log)
}

const handleChange = (value: string) => {
  addEventLog('change', value)
}

const handleVisibleChange = (visible: boolean) => {
  addEventLog('visible-change', visible ? '显示' : '隐藏')
}
</script>

<style scoped>
.select-demo {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 300px;
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

.vk-select {
  width: 100%;
}

.option-info {
  padding: 10px 15px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fafafa;
  font-size: 12px;
}

.option-info p {
  margin: 3px 0;
  color: #909399;
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
