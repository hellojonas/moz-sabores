<template>
  <div class="home">
    <div class="home__header">
      <app-container>
        <div class="home__text-box">
          <app-spacer mb="lg">
            <h1 class="home__heading">
              <span>Seu Paladar</span>
              <span>A Merce De Um Click</span>
            </h1>
          </app-spacer>
          <app-spacer textCenter>
            <base-button>Junte-se Agora </base-button>
          </app-spacer>
        </div>
      </app-container>
    </div>
  </div>
  <app-container></app-container>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  setup() {},
};
</script>


<style lang="scss" scoped>
.home {
  &__header {
    height: 25rem;
    background: url("../assets/hero.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 25rem;
      width: 100%;
      background-color: var(--color-hero-overlay);
    }
  }

  &__text-box {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -55%);
    z-index: var(--stack-first);
    max-width: 20rem;
    width: 100%;
  }

  &__heading {
    display: flex;
    flex-direction: column;
    color: var(--color-text-light);
  }
}
</style>