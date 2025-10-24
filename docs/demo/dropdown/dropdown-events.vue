<template>
    <div class="dropdown-demo">
        <Dropdown trigger="click" :menu-options="dropdownMenu" @select="handleSelect" @visible-change="handleVisibleChange">
            <Button type="primary">带事件的下拉菜单</Button>
        </Dropdown>

        <div v-if="selectedItem" class="selected-info">
            选中的菜单项：{{ selectedItem.label }}
        </div>

        <div class="visible-status">
            下拉菜单状态：{{ isVisible ? '显示' : '隐藏' }}
        </div>
    </div>
</template>

<script setup lang="ts">
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import type { MenuOption } from '@/components/Dropdown/types.ts'
import { ref } from 'vue'

defineOptions({
    name: 'DropdownEvents'
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

const selectedItem = ref<MenuOption | null>(null)
const isVisible = ref(false)

const handleSelect = (item: MenuOption) => {
    selectedItem.value = item
    console.log('Selected item:', item)
}

const handleVisibleChange = (visible: boolean) => {
    isVisible.value = visible
    console.log('Dropdown visibility changed:', visible)
}
</script>

<style scoped>
.dropdown-demo {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 300px;
}

.selected-info,
.visible-status {
    padding: 10px 15px;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fafafa;
    font-size: 14px;
}

.selected-info {
    color: #606266;
}

.visible-status {
    color: #909399;
}
</style>
