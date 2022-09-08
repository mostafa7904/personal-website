import { describe, expect, it } from 'vitest'
import { type MountingOptions, mount } from '@vue/test-utils'
import Chip from './Chip.vue'

const mountFunction = (options?: MountingOptions<any>) => {
  return mount(Chip, {
    ...options,
  })
}

describe('Chip.vue', () => {
  it('should be truthy', () => {
    const wrapper = mountFunction()
    expect(wrapper.vm).toBeTruthy()
  })
  it('should render correctly', () => {
    const wrapper = mountFunction({
      slots: {
        default: 'test',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
