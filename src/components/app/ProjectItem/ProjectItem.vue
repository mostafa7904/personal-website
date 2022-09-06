<script setup lang="ts">
import { Project } from 'src/types/project'

interface Props {
  project: Project
}
const props = defineProps<Props>()
</script>

<template>
  <div class="project-card">
    <img
      :src="props.project.image"
      :alt="props.project.title"
      class="project-card__image"
      loading="lazy"
    />
    <div class="project-card__text">
      <div class="project-card__title">
        <h3>
          {{ props.project.title }}
        </h3>
        <a class="project-card__link" :href="props.project.link">
          <img src="icons/external-link.svg" alt="link to project" />
        </a>
      </div>

      <p>{{ props.project.description }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables';

.project-card {
  position: relative;
  border-radius: 22px;
  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &__text {
    position: relative;
    padding: 1px 32px 56px;
    background: #1d1a27;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  &__title {
    display: flex;
    justify-content: space-between;
  }
  &__link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
