# Input 输入框

Input 组件用于收集和展示用户输入的文本信息，支持多种类型、状态和交互效果，是表单中常用的基础组件。

## 基础用法

输入框的基础使用支持单行文本和多行文本（文本域）两种形式，通过 `type` 属性可进行切换。

:::preview

demo-preview=../demo/input/input-basic.vue

:::

## 状态与属性

输入框提供了多种状态和功能属性，包括禁用、只读、可清除和密码框等，可以根据实际需求灵活配置。

:::preview

demo-preview=../demo/input/input-status.vue

:::

## 尺寸与事件

输入框支持不同的尺寸设置，以及多种事件响应，用于处理用户输入和交互。

:::preview

demo-preview=../demo/input/input-size-events.vue

:::

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 输入框类型 | `string` | `text` / `textarea` / `password` 等 | `text` |
| model-value / v-model | 绑定值 | `string` | - | - |
| size | 输入框尺寸 | `'large' \| 'small'` | - | - |
| disabled | 是否禁用 | `boolean` | - | `false` |
| clearable | 是否可清除 | `boolean` | - | `false` |
| show-password | 是否显示切换密码可见性的按钮 | `boolean` | - | `false` |
| placeholder | 占位符文本 | `string` | - | - |
| readonly | 是否只读 | `boolean` | - | `false` |
| autocomplete | 自动补全 | `string` | - | `'off'` |
| autofocus | 是否自动获取焦点 | `boolean` | - | `false` |
| form | 关联的表单 | `string` | - | - |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入值变化时触发 | `(value: string)` |
| change | 输入框失去焦点且值发生变化时触发 | `(value: string)` |
| focus | 输入框获取焦点时触发 | `(event: FocusEvent)` |
| blur | 输入框失去焦点时触发 | `(event: FocusEvent)` |
| clear | 点击清除按钮时触发 | - |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| ref | 获取输入框的原生DOM引用 | - |