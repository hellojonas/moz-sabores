<template>
  <div class="recipe">
    <div class="recipe__image-box">
      <img :src="imagePath" alt="" class="recipe__image" />
    </div>
    <div class="recipe__description">
      <app-spacer mb="sm">
        <base-heading type="sub">{{ subtitle }}</base-heading>
      </app-spacer>
      <app-spacer mb="base">
        <base-heading type="title2">{{ title }}</base-heading>
      </app-spacer>
      <div class="recipe__author">{{ author }}</div>
    </div>
    <div class="recipe__controls">
      <base-button outlined>ver receita</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: String,
    title: String,
    author: String,
    imagePath: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.recipe {
  max-width: 34rem;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow);
  background-color: var(--color-secondary);

  &__image-box {
    width: 100%;
    height: 19.2rem;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__description {
    padding: 1.2rem 1.6rem 0;
    margin-bottom: 1.6rem;
  }

  &__author {
    color: var(--color-text-body);
    font-style: italic;
    font-size: 1.4rem;
  }

  &__controls {
    padding-bottom: 1.2rem;
    text-align: center;
  }
}
</style>