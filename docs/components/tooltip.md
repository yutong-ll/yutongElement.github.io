# Tooltip 组件

Tooltip 组件用于展示鼠标悬浮或点击元素时的提示信息，支持多种触发方式、位置配置和交互控制，适用于表单说明、操作提示等场景。

## 基础用法

Tooltip 组件通过包裹目标元素实现提示功能，可通过属性配置触发方式、内容、位置等，基础使用简单灵活。

### 基本展示

通过默认插槽传入触发元素，`content` 属性设置提示内容，默认 hover 触发、顶部显示。

:::preview

demo-preview=../demo/tooltip/tooltip-basic.vue

:::

## 触发方式

Tooltip 支持两种触发方式：鼠标悬浮 (`hover`) 和点击 (`click`)。

:::preview

demo-preview=../demo/tooltip/tooltip-trigger.vue

:::

## 位置配置

Tooltip 支持 12 个不同的展示位置，通过 `placement` 属性设置。

:::preview

demo-preview=../demo/tooltip/tooltip-placement.vue

:::

## 延迟显示/隐藏

通过 `openDelay` 和 `closeDelay` 属性可以设置显示和隐藏的延迟时间，单位为毫秒。

:::preview

demo-preview=../demo/tooltip/tooltip-delay.vue

:::

## 自定义内容

通过 `content` 插槽可以自定义提示内容，支持HTML和组件。

:::preview

demo-preview=../demo/tooltip/tooltip-slot.vue

:::

## 过渡效果

通过 `transition` 属性可以设置提示框的过渡动画效果。

:::preview

demo-preview=../demo/tooltip/tooltip-transition.vue

:::

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| content | 提示内容 | string | — | — |
| trigger | 触发方式 | string | hover / click | hover |
| placement | 提示框位置 | string | 所有 Popper.js 支持的位置 | top |
| manual | 是否手动控制显示状态 | boolean | — | false |
| popperOptions | Popper.js 配置项 | object | — | — |
| transition | 过渡动画名称 | string | — | fade |
| openDelay | 显示延迟时间(ms) | number | — | 0 |
| closeDelay | 隐藏延迟时间(ms) | number | — | 0 |

### 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| visible-change | 显示状态改变时触发 | value: boolean |

### 插槽

| 名称 | 说明 |
|------|------|
| default | 触发提示的元素 |
| content | 自定义提示内容 |

### 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| show | 显示提示 | — |
| hide | 隐藏提示 | — |