<template>
    <Dropdown trigger="click">
        <template #default>
            <Button type="success">自定义触发器</Button>
        </template>
        <template #dropdown>
            <div class="custom-dropdown-content">
                <div class="custom-item">
                    <Icon name="user" /> 用户中心
                </div>
                <div class="custom-item">
                    <Icon name="settings" /> 系统设置
                </div>
                <div class="custom-item">
                    <Icon name="help" /> 帮助中心
                </div>
                <div class="divider"></div>
                <div class="custom-item">
                    <Icon name="logout" /> 退出登录
                </div>
            </div>
        </template>
    </Dropdown>
</template>

<script setup lang="ts">
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'

defineOptions({
    name: 'DropdownSlot'
})
</script>

<style scoped>
.custom-dropdown-content {
    padding: 10px 0;
    min-width: 150px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.custom-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
}

.custom-item:hover {
    background-color: #f5f7fa;
    color: #409eff;
}

.divider {
    height: 1px;
    background-color: #ebeef5;
    margin: 2px 0;
}

.custom-item .vk-icon {
    margin-right: 8px;
}
</style>
