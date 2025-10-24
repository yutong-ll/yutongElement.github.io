<template>
  <div class="dropdown-demo">
    <Dropdown trigger="click" :menu-options="dropdownMenu">
      <Button type="primary">点击下拉菜单</Button>
    </Dropdown>

    <Dropdown trigger="hover" :menu-options="dropdownMenu" placement="top-start">
      <Button>悬停下拉菜单</Button>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import type { MenuOption } from '@/components/Dropdown/types.ts'

defineOptions({
  name: 'DropdownBasic'
})

const dropdownMenu: MenuOption[] = [
  {
    label: '菜单项1',
    key: '1'
  },
  {
    label: '菜单项2',
    key: '2'
  },
  {
    label: '菜单项3',
    key: '3'
  },
  {
    label: '',
    key: 'divider',
    divided: true
  },
  {
    label: '禁用菜单项',
    key: '4',
    disabled: true
  }
]
</script>

<style scoped>
.dropdown-demo {
  display: flex;
  gap: 20px;
}
</style>
