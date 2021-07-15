<template>
  <h2
    v-if="type === 'secondary'"
    class="heading"
    :class="colorize"
    :style="cssVars"
  >
    <slot></slot>
  </h2>
  <h3
    v-else-if="type === 'tertiary'"
    class="heading"
    :class="colorize"
    :style="cssVars"
  >
    <slot></slot>
  </h3>
  <div
    v-else-if="type === 'sub'"
    class="heading"
    :class="colorize"
    :style="cssVars"
  >
    <slot></slot>
  </div>
  <div
    v-else-if="type === 'title1'"
    class="heading"
    :class="colorize"
    :style="cssVars"
  >
    <slot></slot>
  </div>
  <div
    v-else-if="type === 'title2'"
    class="heading"
    :class="colorize"
    :style="cssVars"
  >
    <slot></slot>
  </div>
  <h1 v-else class="heading" :class="colorize" :style="cssVars">
    <slot></slot>
  </h1>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    type: { type: String },
    defaultColor: { type: Boolean, default: false },
  },
  setup(props) {
    const cssVars = computed(() => {
      const fontSize = {
        primary: "3rem",
        secondary: "2.4rem",
        tertiary: "1.8rem",
        sub: "1.5rem",
        title1: "2.4rem",
        title2: "1.8rem",
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

    const colorize = computed(() => {
      return {
        colorize: !props.defaultColor,
      };
    });

    return { cssVars, colorize };
  },
};
</script>


<style lang="scss" scoped>
.heading {
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: 120%;
  letter-spacing: -0.06em;
}

.colorize {
  color: var(--heading-color);
}
</style>