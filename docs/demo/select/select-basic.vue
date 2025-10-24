<template>
  <div class="select-demo">
    <div class="demo-item">
      <label>基础选择器：</label>
      <Select v-model="selectedValue" :options="options" placeholder="请选择" />
    </div>

    <div class="demo-item">
      <label>当前选中值：</label>
      <div class="selected-value">
        <p>选中的label: {{ selectedLabel }}</p>
        <p>选中的value: {{ selectedValue }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Select from '../../../src/components/Select/Select.vue'
import type { SelectOption } from '../../../src/components/Select/types.ts'
import { ref, computed } from 'vue'

defineOptions({
  name: 'SelectBasic'
})

const options: SelectOption[] = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' }
]

const selectedValue = ref('')
const selectedLabel = computed(() => {
  const selectedOption = options.find(option => option.value === selectedValue.value)
  return selectedOption ? selectedOption.label : ''
})
</script>

<style scoped>
.select-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
}

.demo-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 14px;
  color: #606266;
  font-weight: 500;
}

.selected-value {
  padding: 10px 15px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fafafa;
  font-size: 14px;
}

.selected-value p {
  margin: 5px 0;
  color: #909399;
}

.vk-select {
  width: 100%;
}
</style>
