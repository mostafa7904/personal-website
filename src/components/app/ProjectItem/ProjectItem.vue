<script setup lang="ts">
import Chip from '@/components/core/Chip/Chip.vue'
import { Project, SourceTypes } from '../../../types/project.d'

interface Props {
  project: Project
}
const { project } = defineProps<Props>()
</script>

<template>
  <div class="project-card">
    <img
      :src="project.image"
      :alt="project.title"
      class="project-card__image"
      loading="lazy"
    />
    <div class="project-card__content">
      <div class="project-card__title">
        <h3>
          {{ project.title }}
        </h3>
        <div class="project-card__links">
          <a class="project-card__link" :href="project.link">
            <img
              width="20"
              src="icons/external-link.svg"
              alt="link to project"
            />
          </a>
          <a
            v-if="project.sourceLink !== '#'"
            :href="project.sourceLink"
            class="project-card__link"
          >
            <img
              :src="`icons/${
                project.sourceType === SourceTypes.GITHUB ? 'github' : 'gitlab'
              }.svg`"
              width="20"
              alt="link to source"
            />
          </a>
        </div>
      </div>

      <p class="project-card__description">{{ project.description }}</p>

      <div class="project-card__tags">
        <Chip
          v-for="(tag, key) in project.tags"
          :key="key"
          style="margin-right: 6px"
        >
          {{ tag }}
        </Chip>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables';

.project-card {
  position: relative;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &__content {
    flex: 1;
    position: relative;
    padding: 10px 30px 20px 30px;
    background: #1d1a27;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    max-height: fit-content;
    & h3 {
      line-height: 0;
    }
  }
  &__links {
    display: flex;
  }
  &__link {
    opacity: 0.5;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
  &__description {
    font-size: 0.8rem;
    word-spacing: 1.33px;
  }
  &__tags {
    display: flex;
    margin-top: 25px;
  }
}
</style>
