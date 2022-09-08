import { describe, expect, it } from 'vitest'
import { type MountingOptions, mount } from '@vue/test-utils'
import ProjectItem from './ProjectItem.vue'

const mountFunction = (options?: MountingOptions<any>) => {
  return mount(ProjectItem, {
    ...options,
  })
}

describe('ProjectItem.vue', () => {
  it('should mount the project item', () => {
    const wrapper = mountFunction({
      props: {
        project: {
          title: 'Mostafa',
        },
      },
    })
    expect(wrapper.text()).toBe('Mostafa')
  })
})
