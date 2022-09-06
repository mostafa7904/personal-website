<script setup lang="ts">
import { Project } from 'src/types/Projects/project'

interface Props {
  project: Project
}
const props = defineProps<Props>()
</script>

<template>
  <div class="project-card">
    <img
      class="project-card__image"
      :src="props.project.image"
      :alt="props.project.title"
    />
    <div class="project-card__text">
      <h3 class="project-card__title">
        {{ props.project.title }}
      </h3>
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
    height: auto;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &__text {
    transform: translateY(0);
    position: relative;
    background: #1d1a27;
    padding: 50px 60px;

    @media screen and (max-width: map-get($map: $display-breakpoints, $key: 'md')) {
      padding: 30px 40px;
    }
  }
}
</style>
