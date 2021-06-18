<template>
  <div class="menu">
    <app-container>
      <div class="menu__box">
        <div class="menu__logo">
          <AppLogo />
        </div>
        <div class="menu__nav-menu">
          <Menu />
        </div>
      </div>
    </app-container>
  </div>
</template>

<script>
import { Menu } from "mdue";
import AppLogo from "./AppLogo.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    Menu,
    AppLogo,
  },
  setup() {
    const route = useRoute();

    const isHome = computed(() => route.path === "/");

    return { isHome };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--stack-5);
  width: 100%;
  /* height: 3.5rem; */
  /* background-color: var(--color-primary); */

  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav-menu {
    color: var(--color-text-light);
  }
}

.menu--transparent {
  background-color: transparent;
}

.menu-filled {
  background-color: var(--color-primary);
}
</style>