<template>
  <div class="chip">
    <div class="chip__content">
      <slot></slot>
    </div>
    <div class="chip__gradient"></div>
  </div>
</template>

<style lang="scss">
.chip {
  position: relative;
  display: flex;
  align-items: center;
  max-height: 20px;

  &__gradient {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    background-image: linear-gradient(
      270deg,
      rgba(255, 56, 104, 0.5),
      rgba(77, 84, 255, 0.5)
    );
    filter: blur(6px);
  }
  &__content {
    position: relative;
    z-index: 10;
    background-color: #13111a;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.07);
    padding: 7px 20px;
    border-radius: 12px;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0;
  }
}
</style>
