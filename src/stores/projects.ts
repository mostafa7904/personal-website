import { acceptHMRUpdate, defineStore } from 'pinia'
import type { EntryCollection } from 'contentful'
import type { ProjectEntry, Project } from '../types/project'
import { useContentFul } from '../composables/useContentFul'
import { useContentfulPresenter } from '../composables/useContentfulPresenter'

export const useProjectsStore = defineStore('projects', {
  state: (): ProjectsState => ({
    projects: [],
  }),
  actions: {
    async getProjects() {
      const [client] = useContentFul()
      const entriesRes: EntryCollection<ProjectEntry> = await client.getEntries(
        {
          content_type: 'projects',
          order: 'fields.order',
        },
      )

      const [entries]: any = useContentfulPresenter<ProjectEntry>(entriesRes)
      this.$patch({
        projects: entries,
      })
    },
  },
})

interface ProjectsState {
  projects: Project[]
}

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore), import.meta.hot)
}
