# Button 组件

按钮用于触发一个操作，如提交表单、打开弹窗等。组件提供了丰富的类型、状态和交互效果，满足各类场景需求。

## 基础用法

按钮的基础使用包含默认样式、主题类型和交互状态，通过简单属性即可快速配置。

### 主题类型
通过 `type` 属性指定按钮主题，支持五种预设类型，适配不同业务场景（如成功、警告、危险等操作）。

:::preview

demo-preview=../demo/button/button-type.vue

:::

### 朴素按钮
通过 `plain` 属性设置朴素风格，按钮仅保留边框和文字颜色，适合轻量化界面。

:::preview

demo-preview=../demo/button/button-plain.vue

:::

## 形态与尺寸

按钮支持多种形态（圆角、圆形）和尺寸，适应不同布局和视觉需求。

### 圆角与圆形
- `round` 属性设置圆角按钮
- `circle` 属性设置圆形按钮（建议配合图标或单字使用）

:::preview

demo-preview=../demo/button/button-shape.vue

:::

### 尺寸控制
通过 `size` 属性设置按钮尺寸，支持 `large`（大）、`default`（默认）、`small`（小）三种规格。

:::preview

demo-preview=../demo/button/button-size.vue

:::

## 状态与交互

按钮提供禁用、加载等状态，以及点击、焦点等交互反馈。

### 禁用状态
通过 `disabled` 属性禁用按钮，禁用状态下不响应点击事件。

:::preview

demo-preview=../demo/button/button-disabled.vue

:::

### 加载状态
通过 `loading` 属性显示加载状态，通常用于异步操作（如表单提交）时的状态提示。

:::preview

demo-preview=../demo/button/button-loading.vue

:::

### 带图标按钮
通过 `icon` 属性添加内置图标，增强视觉表达（需配合图标库使用）。

:::preview

demo-preview=../demo/button/button-icon.vue

:::

## API

### 属性

| 参数      | 说明                     | 类型    | 可选值                                      | 默认值  |
|-----------|--------------------------|---------|---------------------------------------------|---------|
| type      | 按钮类型                 | string  | primary / success / info / warning / danger | —       |
| size      | 按钮尺寸                 | string  | large / small                               | —       |
| plain     | 是否为朴素按钮           | boolean | —                                           | false   |
| round     | 是否为圆角按钮           | boolean | —                                           | false   |
| circle    | 是否为圆形按钮           | boolean | —                                           | false   |
| disabled  | 是否禁用                 | boolean | —                                           | false   |
| loading   | 是否显示加载状态         | boolean | —                                           | false   |
| icon      | 按钮图标（内置图标名称） | string  | —                                           | —       |

### 事件

| 事件名 | 说明                 | 回调参数       |
|--------|----------------------|----------------|
| click  | 点击按钮时触发       | (event: Event) |
| focus  | 按钮获得焦点时触发   | (event: Event) |
| blur   | 按钮失去焦点时触发   | (event: Event) |


<style>
/* 示例区块样式 */
.demo-block {
  padding: 20px;
  margin: 16px 0;
  border-radius: 6px;
  background-color: #f5f7fa;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

/* 代码块样式增强 */
pre[class*="language-"] {
  margin: 8px 0 24px;
  padding: 16px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
}
</style>