<template>
  <div class="spacer" :style="sizes" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    mt: String,
    mb: String,
    textCenter: Boolean,
    centered: Boolean,
  },
  setup(props) {
    const spacing = {
      xs: "0.125rem",
      sm: "0.25rem",
      base: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "4rem",
    };

    const sizes = computed(() => ({
      "--mt": spacing[props.mt],
      "--mb": spacing[props.mb],
    }));

    const classes = computed(() => ({
      centered: props.centered,
      textCenter: props.textCenter,
    }));

    return { sizes, classes };
  },
};
</script>

<style lang="scss" scoped>
.spacer {
  margin-top: var(--mt);
  margin-bottom: var(--mb);
}

.centered {
  margin-left: auto;
  margin-right: auto;
}

.textCenter {
  text-align: center;
}
</style>