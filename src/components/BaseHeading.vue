<template>
  <h2 v-if="type === 'secondary'" class="heading" :style="cssVars">
    <slot></slot>
  </h2>
  <h3 v-else-if="type === 'tertiary'" class="heading" :style="cssVars">
    <slot></slot>
  </h3>
  <div v-else-if="type === 'sub'" class="heading" :style="cssVars">
    <slot></slot>
  </div>
  <div v-else-if="type === 'title1'" class="heading" :style="cssVars">
    <slot></slot>
  </div>
  <div v-else-if="type === 'title2'" class="heading" :style="cssVars">
    <slot></slot>
  </div>
  <h1 v-else class="heading" :style="cssVars">
    <slot></slot>
  </h1>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    type: { type: String },
  },
  setup(props) {
    const cssVars = computed(() => {
      const fontSize = {
        primary: "1.875rem",
        secondary: "1.5rem",
        tertiary: "1.125rem",
        sub: "0.96rem",
        title1: "1.5rem",
        title2: "1.125rem",
      };
      return {
        "--font-size": fontSize[props.type || "primary"],
        "--font-weight": props.type === "sub" ? 500 : 600,
        "--line-height": "130%",
        "--letter-spacing": "-4%",
        "--heading-color":
          props.type === "title1" ||
          props.type === "title2" ||
          props.type === "sub"
            ? "var(--color-text-body)"
            : "var(--color-text-dark)",
      };
    });

    return { cssVars };
  },
};
</script>


<style lang="scss" scoped>
.heading {
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: 130%;
  letter-spacing: -0.06em;
  color: var(--heading-color);
}
</style>