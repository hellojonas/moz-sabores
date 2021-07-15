<template>
  <div class="card">
    <div class="card__image-box">
      <div class="card__image-box">
        <img :src="imagePath" alt="" class="card__image">
      </div>
    </div>
    <div class="card__name">{{ name }}</div>
    <div class="card__description">
      <slot></slot>
    </div>
    <div class="card__more">
      <div class="card__more-item">
        <div class="card__more-icon">
          <HeartOutline />
        </div>
        {{ followers }} seguidores
      </div>
      <div class="card__more-item">
        <div class="card__more-icon">
          <NoteTextOutline />
        </div>
        {{ recipes }} receitas
      </div>
    </div>
  </div>
</template>

<script>
  import {HeartOutline, NoteTextOutline} from 'mdue';
  export default {
    components: {
      HeartOutline,
      NoteTextOutline,
    },
    props: {
      recipes: Number,
      followers: Number,
      description: String,
      name: String,
      imagePath: String
    },
  };
</script>

<style lang="scss" scoped>
  .card {
    padding: 0.8rem 1.6rem;
    border-radius: 10px;
    background-color: var(--color-secondary);
    max-width: 20rem;
    width: 100%;
    display: flex;
    flex-direction: column;


    &__image-box {
      height: 9.6rem;
      width: 9.6rem;
      border-radius: 100px;
      background-color: #444;
      margin-bottom: 2.4rem;
      align-self: center;
      overflow: hidden;
    }

    &__image {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__name {
      font-size: 1.875rem;
      font-weight: 500;
      color: var(--color-text-body);
      margin-bottom: 1rem;
      letter-spacing: -.04em;
    }

    &__description {
      font-size: 1.2rem; 
      margin-bottom: .8rem;
      color: var(--color-text-body);
    }

    &__more {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: var(--color-text-body);
    }

    &__more-item {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 1.6rem;
      }
    }

    &__more-icon {
      color: var(--color-primary);
      margin-right: .4rem;
      margin-bottom: -2px;
    }
  }
</style>
