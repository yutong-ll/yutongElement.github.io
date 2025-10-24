<template>
  <div class="demo-icon-basic">
    <h3>基础用法</h3>
    <div class="icon-list">
      <Icon icon="home" />
      <Icon icon="user" />
      <Icon icon="settings" />
      <Icon icon="search" />
      <Icon icon="bell" />
      <Icon icon="menu" />
      <Icon icon="file" />
      <Icon icon="folder" />
      <Icon icon="star" />
      <Icon icon="heart" />
    </div>

    <h3>带边框图标</h3>
    <div class="icon-list">
      <Icon icon="home" border />
      <Icon icon="user" border />
      <Icon icon="settings" border />
    </div>

    <h3>固定宽度图标</h3>
    <div class="icon-list fixed-width">
      <div class="icon-item">
        <Icon icon="home" fixedWidth /> 首页
      </div>
      <div class="icon-item">
        <Icon icon="user" fixedWidth /> 用户
      </div>
      <div class="icon-item">
        <Icon icon="settings" fixedWidth /> 设置
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<style scoped>
.demo-icon-basic {
  padding: 20px;
}

h3 {
  margin: 20px 0 10px 0;
  font-size: 16px;
  color: #333;
}

.icon-list {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.icon-list .ve-icon {
  font-size: 24px;
}

.fixed-width {
  flex-direction: column;
  gap: 10px;
}

.icon-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
}
</style>
