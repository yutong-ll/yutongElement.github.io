import type { PropType } from 'vue'
// 定义字符串字面量类型（限定可选值）
export type ButtonType = 'primary' | 'success' | 'danger' | 'warning' | 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'
// 定义组件实例类型（用于模板引用）
export interface ButtonInstance {
  ref: HTMLButtonElement
}
// 定义组件的属性（Props）
export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>
  },
  size: {
    type: String as PropType<ButtonSize>,
  },
  plain: {
    type: Boolean
  },
  round: {
    type: Boolean
  },
  circle: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button' as const
  },
  autofocus: {
    type: Boolean
  }
  ,
  icon: {
    type: String
  }
  ,
  loading: {
    type: Boolean
  }
}

