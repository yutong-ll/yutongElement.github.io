
import type { PropType } from 'vue'
import type { Ref } from 'vue'
export type NameType = string | number

export const CollapseProps = {
  modelValue: {
    type: Array as PropType<NameType[]>,
    default: () => []
  },
  accordion: {
    type: Boolean,
    default: false
  }
}
export const CollapseItemProps = {
  name: {
    type: [String, Number] as PropType<NameType>,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
export interface CollapseContext {
  activeNames: Ref<NameType[]>,
  handleClick: (name: NameType) => void,
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: NameType[]): void,
  (e: 'change', value: NameType[]): void,
}
export const CollapseContextKey = Symbol('CollapseContext')

