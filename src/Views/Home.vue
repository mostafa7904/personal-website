<script setup lang="ts">
import { useHead } from '@vueuse/head'
import ProjectItem from '@/components/app/ProjectItem/ProjectItem.vue'
import { Project } from 'src/types/Projects/project'

interface Links {
  icon: string
  title: string
  url: string
}

const links: Array<Links> = [
  {
    icon: 'icons/github.svg',
    title: 'Github',
    url: 'https://github.com'
  },
  {
    icon: 'icons/linkedin.svg',
    title: 'LinkedIn',
    url: 'https://linkedin.com'
  },
  {
    icon: 'icons/twitter.svg',
    title: 'Twitter',
    url: 'https://twitter.com'
  },
  {
    icon: 'icons/stack-over-flow.svg',
    title: 'StackOverFlow',
    url: 'https://stackoverflow.com'
  },
  {
    icon: 'icons/gitlab.svg',
    title: 'Gitlab',
    url: 'https://gitlab.com'
  },
  {
    icon: 'icons/medium.svg',
    title: 'Medium',
    url: 'https://medium.com'
  }
]

const projects: Array<Project> = [
  {
    title: 'My project',
    description:
      'Vue - Built with the lastest stable version of Vue 2, Tailwind - Using tailwind',
    image: 'https://mostafa-rahmati.ir/img/pricing.bb81dac4.webp',
    stack: ['Vue', 'Typescript', 'Tailwind']
  },
  {
    title: 'My project',
    description:
      'Vue - Built with the lastest stable version of Vue 2, Tailwind - Using tailwind',
    image: 'https://mostafa-rahmati.ir/img/spotify_clone.076a81fb.webp',
    stack: ['Vue', 'Typescript', 'Tailwind']
  },
  {
    title: 'My project',
    description:
      'Vue - Built with the lastest stable version of Vue 2, Tailwind - Using tailwind',
    image: 'https://mostafa-rahmati.ir/img/ideato.9c6d3eb3.webp',
    stack: ['Vue', 'Typescript', 'Tailwind']
  },
  {
    title: 'My project',
    description:
      'Vue - Built with the lastest stable version of Vue 2, Tailwind - Using tailwind',
    image: 'https://mostafa-rahmati.ir/img/pricing.bb81dac4.webp',
    stack: ['Vue', 'Typescript', 'Tailwind']
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
          v-for="(project, key) in projects"
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-row-gap: 35px;
  grid-template-rows: auto;
  grid-gap: 30px;
  grid-column-gap: 35px;
}
</style>
