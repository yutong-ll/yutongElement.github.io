# Select 选择器

Select 组件用于从一组选项中选择一个值，支持禁用状态、自定义选项以及事件响应，适用于表单选择、数据筛选等场景。

## 基础用法

选择器的基础使用包含选项配置和值绑定，通过简单设置即可实现下拉选择功能。

:::preview

demo-preview=../demo/select/select-basic.vue

:::

## 禁用状态与事件

选择器支持禁用整个组件或部分选项，同时提供了丰富的事件响应机制。

:::preview

demo-preview=../demo/select/select-disabled.vue

:::

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string` | - | - |
| options | 选项数组 | `SelectOption[]` | - | - |
| placeholder | 占位符文本 | `string` | - | - |
| disabled | 是否禁用 | `boolean` | - | `false` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选择值发生变化时触发 | `(value: string)` |
| visible-change | 下拉菜单显示/隐藏状态改变时触发 | `(visible: boolean)` |
| update:modelValue | 绑定值更新时触发（通常与v-model配合使用） | `(value: string)` |

### 类型定义

```typescript
// SelectOption 类型定义
interface SelectOption {
  label: string;  // 选项的显示文本
  value: string;  // 选项的值
  disabled?: boolean;  // 是否禁用该选项
}
```