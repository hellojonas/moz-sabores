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
      none: 0,
      xs: "0.2rem",
      sm: "0.4rem",
      base: ".8rem",
      md: "1.6rem",
      lg: "2.4rem",
      xl: "3.2rem",
      "2xl": "6.4rem",
    };

    const sizes = computed(() => ({
      "--mt": spacing[props.mt || "none"],
      "--mb": spacing[props.mb || "none"],
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