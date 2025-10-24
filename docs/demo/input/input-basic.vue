<template>
  <div class="input-demo">
    <div class="demo-item">
      <label>基础输入框：</label>
      <Input v-model="inputValue" placeholder="请输入内容" />
    </div>

    <div class="demo-item">
      <label>文本域：</label>
      <Input v-model="textareaValue" type="textarea" placeholder="请输入多行文本" />
    </div>

    <div class="demo-item">
      <label>当前输入值：</label>
      <div class="input-value">
        <p>基础输入框: {{ inputValue }}</p>
        <p>文本域: {{ textareaValue }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '../../../src/components/Input/Input.vue'
import { ref } from 'vue'

defineOptions({
  name: 'InputBasic'
})

const inputValue = ref('')
const textareaValue = ref('')
</script>

<style scoped>
.input-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
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

.input-value {
  padding: 10px 15px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fafafa;
  font-size: 14px;
}

.input-value p {
  margin: 5px 0;
  color: #909399;
}

.vk-input {
  width: 100%;
}
</style>
