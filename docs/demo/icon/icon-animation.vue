<template>
  <div class="demo-icon-animation">
    <h3>动画效果</h3>
    <div class="icon-list">
      <div class="animation-item">
        <Icon icon="spinner" spin />
        <span>spin</span>
      </div>
      <div class="animation-item">
        <Icon icon="spinner" pulse />
        <span>pulse</span>
      </div>
      <div class="animation-item">
        <Icon icon="heart" bounce />
        <span>bounce</span>
      </div>
      <div class="animation-item">
        <Icon icon="bell" shake />
        <span>shake</span>
      </div>
      <div class="animation-item">
        <Icon icon="star" beat />
        <span>beat</span>
      </div>
      <div class="animation-item">
        <Icon icon="moon" fade />
        <span>fade</span>
      </div>
      <div class="animation-item">
        <Icon icon="music" beatFade />
        <span>beatFade</span>
      </div>
      <div class="animation-item">
        <Icon icon="sync-alt" spinPulse />
        <span>spinPulse</span>
      </div>
      <div class="animation-item">
        <Icon icon="spinner" spinReverse />
        <span>spinReverse</span>
      </div>
    </div>

    <h3>旋转角度</h3>
    <div class="icon-list">
      <div class="rotation-item">
        <Icon icon="arrow-up" />
        <span>0°</span>
      </div>
      <div class="rotation-item">
        <Icon icon="arrow-up" rotation="90" />
        <span>90°</span>
      </div>
      <div class="rotation-item">
        <Icon icon="arrow-up" rotation="180" />
        <span>180°</span>
      </div>
      <div class="rotation-item">
        <Icon icon="arrow-up" rotation="270" />
        <span>270°</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<style scoped>
.demo-icon-animation {
  padding: 20px;
}

h3 {
  margin: 20px 0 10px 0;
  font-size: 16px;
  color: #333;
}

.icon-list {
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.icon-list .ve-icon {
  font-size: 28px;
}

.animation-item,
.rotation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.animation-item span,
.rotation-item span {
  font-size: 12px;
  color: #666;
}
</style>
