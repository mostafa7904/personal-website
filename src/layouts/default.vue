<template>
  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';

main {
  padding: 50px;
  @media screen and (max-width: map-get($map: $display-breakpoints, $key: 'sm')) {
    padding: 20px;
  }
}
</style>
