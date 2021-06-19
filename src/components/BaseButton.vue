<template>
  <button class="button" :class="[buttonType]" :style="cssVars">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    type: { type: String },
    outlined: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    textButton: { type: Boolean, default: false },
  },
  setup(props) {
    const cssVars = computed(() => {
      return {
        "--color-button":
          props.type === "secondary"
            ? "var(--color-button-secondary)"
            : "var(--color-button-primary)",
      };
    });

    const buttonType = computed(() => {
      return {
        "is-outlined": props.outlined,
        "is-text-button": props.textButton,
        "is-rounded": props.rounded,
        "is-default": !props.outlined && !props.textButton && !props.rounded,
      };
    });

    return { buttonType, cssVars };
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 0.75rem 1rem;
  min-width: 5rem;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  &:active {
  }

  &:focus {
  }
}

.is-outlined {
  border-color: var(--color-button);
  background-color: transparent;
  color: var(--color-button);
}

.is-rounded {
  border-radius: 100px;
}

.is-text-button {
  background-color: transparent;
  border-color: transparent;
}

.is-text-button {
  border-color: transparent;
  background-color: transparent;
  color: var(--color-button);
}

.is-default {
  border-color: var(--color-button);
  background-color: var(--color-button);
  color: var(--color-text-light);
}
</style>