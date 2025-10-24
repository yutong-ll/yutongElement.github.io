# Collapse 折叠面板

折叠面板用于折叠和展开内容区域，适用于需要分类展示大量内容的场景。

## 基础用法

默认情况下，Collapse 组件支持同时展开多个面板。

:::preview

demo-preview=../demo/collapse/collapse-basic.vue

:::

## 手风琴模式

设置 `accordion` 属性后，同一时间只能展开一个面板。

:::preview

demo-preview=../demo/collapse/collapse-accordion.vue

:::

## 禁用状态

通过设置 `disabled` 属性可以禁用某个面板，禁用的面板无法被打开或关闭。

:::preview

demo-preview=../demo/collapse/collapse-disabled.vue

:::

## API

### Collapse 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| modelValue | 当前激活的面板（手风琴模式下为单个，非手风琴模式下为数组） | string \| number \| (string \| number)[] | — |
| accordion | 是否开启手风琴模式 | boolean | false |

### Collapse 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 绑定值变化时触发 | value: (string \| number)[] |
| change | 绑定值变化时触发 | value: (string \| number)[] |

### CollapseItem 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| name | 唯一标识符，必填 | string \| number | — |
| title | 面板标题 | string | '' |
| disabled | 是否禁用当前面板 | boolean | false |