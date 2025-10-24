# Message 消息提示

Message 组件是一个全局的消息提示组件，用于显示操作反馈、状态变更等信息。它通过编程方式调用，支持多种类型、自定义时长和交互控制。

## 基础用法

消息提示的基础使用支持四种消息类型（成功、信息、警告、错误），以及自定义显示时长、可关闭等特性。

:::preview

demo-preview=../demo/message/message-basic.vue

:::

## 高级用法

除了基础功能外，消息提示还支持手动控制、自定义内容、带偏移量显示和动态内容更新等高级用法。

:::preview

demo-preview=../demo/message/message-advanced.vue

:::

## API

### 函数式调用

Message 组件主要通过函数式 API 进行调用：

```javascript
import { createMessage } from '@/components/Message/method.ts'

// 显示一条信息类型的消息
createMessage({
  message: '这是一条信息',
  type: 'info'
})
```

### 参数选项

调用 `createMessage` 函数时，可以传入以下配置参数：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| message | 消息内容 | `string \| VNode` | - | - |
| type | 消息类型 | `'success' \| 'info' \| 'warning' \| 'danger'` | - | `'info'` |
| duration | 显示时长（毫秒），设置为0则不会自动关闭 | `number` | - | `3000` |
| showClose | 是否显示关闭按钮 | `boolean` | - | `false` |
| offset | 消息距离顶部的偏移量（像素） | `number` | - | `20` |
| transitionName | 过渡动画名称 | `string` | - | `'fade-up'` |

### 返回值

调用 `createMessage` 函数后，会返回一个消息实例对象，可用于手动控制消息：

```javascript
const messageInstance = createMessage({
  message: '这是一条可手动关闭的消息',
  duration: 0
})

// 手动关闭消息
messageInstance.destory()
```

### 辅助函数

Message 组件还提供了一个用于关闭所有消息的辅助函数：

```javascript
import { closeAll } from '@/components/Message/method.ts'

// 关闭所有显示的消息
closeAll()
```

## 交互行为

- **鼠标悬停**：鼠标悬停在消息上时，会暂停自动关闭计时器
- **鼠标离开**：鼠标离开消息后，会继续自动关闭计时器（如果设置了duration）
- **ESC 键**：按下 ESC 键可以关闭当前显示的消息
- **多条消息**：多条消息会自动堆叠显示

## 类型定义

```typescript
// 创建消息的参数类型
export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>

// 消息上下文类型（createMessage 函数的返回值类型）
export interface MessageContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: MessageProps;
  destory: () => void;
}
```