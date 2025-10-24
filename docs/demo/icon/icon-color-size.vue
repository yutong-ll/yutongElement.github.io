<template>
  <div class="demo-icon-color-size">
    <h3>颜色设置</h3>
    <div class="icon-list">
      <Icon icon="home" type="primary" />
      <Icon icon="user" type="success" />
      <Icon icon="warning" type="warning" />
      <Icon icon="error" type="danger" />
      <Icon icon="info-circle" type="info" />
      <Icon icon="star" color="#ff6b3b" />
      <Icon icon="heart" color="#e92322" />
      <Icon icon="flag" color="#36cfc9" />
    </div>

    <h3>尺寸设置</h3>
    <div class="icon-list size-list">
      <div class="size-item">
        <Icon icon="home" size="2xs" />
        <span>2xs</span>
      </div>
      <div class="size-item">
        <Icon icon="home" size="xs" />
        <span>xs</span>
      </div>
      <div class="size-item">
        <Icon icon="home" size="sm" />
        <span>sm</span>
      </div>
      <div class="size-item">
        <Icon icon="home" />
        <span>默认</span>
      </div>
      <div class="size-item">
        <Icon icon="home" size="lg" />
        <span>lg</span>
      </div>
      <div class="size-item">
        <Icon icon="home" size="xl" />
        <span>xl</span>
      </div>
      <div class="size-item">
        <Icon icon="home" size="2xl" />
        <span>2xl</span>
      </div>
    </div>

    <h3>倍数尺寸</h3>
    <div class="icon-list">
      <Icon icon="home" size="1x" />
      <Icon icon="home" size="2x" />
      <Icon icon="home" size="3x" />
      <Icon icon="home" size="4x" />
      <Icon icon="home" size="5x" />
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<style scoped>
.demo-icon-color-size {
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

.size-list {
  align-items: flex-end;
}

.size-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.size-item span {
  font-size: 12px;
  color: #666;
}
</style>
