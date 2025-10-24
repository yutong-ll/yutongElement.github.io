# Dropdown 下拉菜单

Dropdown 组件用于显示一组可选择的菜单项，支持多种触发方式、自定义内容和事件响应，适用于导航、操作菜单等场景。

## 基础用法

下拉菜单的基础使用支持点击和悬停两种触发方式，通过简单配置即可快速实现。

:::preview

demo-preview=../demo/dropdown/dropdown-basic.vue

:::

## 自定义内容

除了使用预设的菜单项配置，还可以通过插槽自定义下拉菜单的内容，实现更丰富的交互效果。

:::preview

demo-preview=../demo/dropdown/dropdown-slot.vue

:::

## 事件响应

下拉菜单提供了 `select` 和 `visible-change` 事件，用于处理菜单项选择和菜单显示/隐藏状态变化。

:::preview

demo-preview=../demo/dropdown/dropdown-events.vue

:::

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| menu-options | 下拉菜单的选项数组 | `MenuOption[]` | - | - |
| hide-after-click | 点击菜单项后是否自动隐藏菜单 | `boolean` | - | `true` |
| trigger | 触发方式 | `'hover' \| 'click'` | - | - |
| placement | 下拉菜单的位置 | `Placement`（来自 @popperjs/core） | - | - |
| manual | 是否手动控制可见性 | `boolean` | - | - |
| popper-options | Popper.js 的配置项 | `Partial<Options>`（来自 @popperjs/core） | - | - |
| transition | 过渡动画名称 | `string` | - | - |
| open-delay | 显示延迟时间（毫秒） | `number` | - | - |
| close-delay | 隐藏延迟时间（毫秒） | `number` | - | - |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 选择菜单项时触发 | `(item: MenuOption)` |
| visible-change | 下拉菜单显示/隐藏状态改变时触发 | `(visible: boolean)` |

### 类型定义

```typescript
// MenuOption 类型定义
interface MenuOption {
  label: string | VNode;  // 菜单项的标签文本或VNode
  key: string | number;   // 菜单项的唯一标识
  disabled?: boolean;     // 是否禁用该项
  divided?: boolean;      // 是否显示分隔线
}
```

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示下拉菜单 | - |
| hide | 隐藏下拉菜单 | - |