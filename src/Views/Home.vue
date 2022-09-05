<script setup lang="ts">
import { useHead } from '@vueuse/head'
interface Links {
  icon: any
  title: string
  url: string
}
const links: Array<Links> = [
  {
    icon: '/icons/github.svg',
    title: 'Github',
    url: 'https://github.com'
  },
  {
    icon: '/icons/linkedin.svg',
    title: 'LinkedIn',
    url: 'https://linkedin.com'
  },
  {
    icon: '/icons/twitter.svg',
    title: 'Twitter',
    url: 'https://twitter.com'
  },
  {
    icon: '/icons/stack-over-flow.svg',
    title: 'StackOverFlow',
    url: 'https://stackoverflow.com'
  },
  {
    icon: '/icons/gitlab.svg',
    title: 'Gitlab',
    url: 'https://gitlab.com'
  },
  {
    icon: '/icons/medium.svg',
    title: 'Medium',
    url: 'https://medium.com'
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
    <h1>Mostafa Rahmati</h1>
    <p>Software Engineer | Full-stack Developer | Music Lover</p>

    <h2>About me</h2>
    <p>
      Hey there, I'm Mostafa and I'm a full-stack developer mostly especializing
      in front-end technologies like Vue and React. I started learning
      JavaScript about 6 years ago and I've been working as a full-stack
      developer for almost 5 years now. I mostly work with JavaScript, but I
      like working with GoLang sometimes (makes me feel cool).
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
</style>
