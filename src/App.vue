<template>
  <NavBar :colorize="isTransparent" />
  <div class="wrapper" @scroll="handleScroll">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { computed, ref, provide } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    NavBar,
  },
  setup() {
    const colorize = ref(false);
    const route = useRoute();

    const isTransparent = computed(() => {
      return route.path === "/" && colorize.value;
    });

    const handleScroll = (event) => {
      colorize.value = event.target.scrollTop >= 30;
    };

    const sectionRefs = {};

    provide("sectionRefs", sectionRefs);

    return { handleScroll, isTransparent };
  },
};
</script>

<style src="@/config/variable.css"></style>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  @media only screen and (min-width: 706px) {
    font-size: 87.5%;
  }

  @media only screen and (min-width: 900px) {
    font-size: 100%;
  }
}

body {
  font-family: "Work Sans", "Segoe UI", sans-serif;
  background: var(--color-bg);
  font-size: 1.2rem;
}

.wrapper {
  height: 100vh;
  overflow-x: hidden;
}
</style>
