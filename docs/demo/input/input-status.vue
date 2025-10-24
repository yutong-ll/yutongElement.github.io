<template>
  <div class="input-demo">
    <div class="demo-item">
      <label>禁用状态：</label>
      <Input v-model="disabledValue" placeholder="禁用状态" disabled />
    </div>

    <div class="demo-item">
      <label>只读状态：</label>
      <Input v-model="readonlyValue" placeholder="只读状态" readonly />
    </div>

    <div class="demo-item">
      <label>可清除：</label>
      <Input v-model="clearableValue" placeholder="可清除输入框" clearable />
    </div>

    <div class="demo-item">
      <label>密码框：</label>
      <Input v-model="passwordValue" placeholder="密码输入框" show-password type="password" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '../../../src/components/Input/Input.vue'
import { ref } from 'vue'

defineOptions({
  name: 'InputStatus'
})

const disabledValue = ref('这是禁用状态')
const readonlyValue = ref('这是只读状态')
const clearableValue = ref('这是可清除的输入')
const passwordValue = ref('password123')
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

.vk-input {
  width: 100%;
}
</style>
