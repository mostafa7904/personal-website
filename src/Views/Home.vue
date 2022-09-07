<script setup lang="ts">
import { useHead } from '@vueuse/head'
import ProjectItem from '@/components/app/ProjectItem/ProjectItem.vue'
import { useProjectsStore } from '../stores/projects'
import { onServerPrefetch } from 'vue'

const store = useProjectsStore()

onServerPrefetch(async () => {
  await store.getProjects()
})

interface Links {
  icon: string
  title: string
  url: string
}

const links: Array<Links> = [
  {
    icon: 'icons/github.svg',
    title: 'Github',
    url: 'https://github.com/mostafa7904'
  },
  {
    icon: 'icons/linkedin.svg',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mostafa-rahmati-717470180/'
  },
  {
    icon: 'icons/twitter.svg',
    title: 'Twitter',
    url: 'https://twitter.com/mosy7904'
  },
  {
    icon: 'icons/stack-over-flow.svg',
    title: 'StackOverFlow',
    url: 'https://stackoverflow.com/users/11084093/mostafa-rahmati'
  },
  {
    icon: 'icons/gitlab.svg',
    title: 'Gitlab',
    url: 'https://gitlab.com/mostafa7904'
  },
  {
    icon: 'icons/medium.svg',
    title: 'Medium',
    url: 'https://medium.com/@mostafa7904'
  }
]

useHead({
  title: 'Mostafa Rahmati | Full-stack developer',
  meta: [
    {
      name: `description`,
      content: `I am Mostafa Rahmati, a Full-stack developer with four years of exprience`
    }
  ]
})
</script>

<template>
  <div class="home">
    <section>
      <h1>Mostafa Rahmati</h1>
      <p style="font-weight: 700">
        Software Engineer | Full-stack Developer | Music Lover
      </p>
    </section>

    <section>
      <h2>About me</h2>
      <p>
        Hey there, I'm Mostafa and I'm a 22 year old full-stack developer mostly
        especializing in front-end technologies like Vue and React. I started
        learning JavaScript about 6 years ago and I've been working as a
        full-stack developer for almost 5 years now. I mostly work with
        JavaScript, but I like working with GoLang sometimes (makes me feel
        cool).
      </p>

      <div class="links">
        <a
          v-for="(link, key) in links"
          target="_blank"
          :key="key"
          :href="link.url"
          :title="link.title"
          :aria-label="link.title"
          class="links__item"
        >
          <img :src="link.icon" :alt="link.title" />
        </a>
      </div>
    </section>

    <section>
      <h2>Stuff I made</h2>
      <div class="projects">
        <ProjectItem
          v-for="(project, key) in store.$state.projects"
          :key="key"
          :project="project"
        >
        </ProjectItem>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';

.links {
  display: flex;
  align-items: center;
  &__item {
    margin-right: 10px;
    img {
      width: 1.1rem;
    }
  }
}

.projects {
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: auto;
  grid-gap: 35px;
  @media screen and (max-width: map-get($map: $display-breakpoints, $key: 'sm')) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}
</style>
