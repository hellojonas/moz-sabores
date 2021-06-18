<template>
  <button class="button" :class="[buttonType, isRounded]">
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
  },
  setup(props) {
    const buttonType = computed(() => {
      return `button-${props.type === "secondary" ? "secondary" : "primary"}${
        props.outlined ? "-outlined" : ""
      }`;
    });

    const isRounded = computed(() => ({
      "button-rounded": props.rounded,
    }));

    return { buttonType, isRounded };
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 0.75rem 1rem;
  min-width: 5rem;
  border: 2px solid transparent;
  border-radius: 0.25rem;

  &:hover {
    cursor: pointer;
  }

  &:active {
  }

  &:focus {
  }
}

.button-primary {
  background-color: var(--color-button-primary);
  color: var(--color-text-light);
}
.button-primary-outlined {
  background-color: transparent;
  border-color: var(--color-button-primary);
  color: var(--color-button-primary);
}
.button-secondary {
  background-color: var(--color-button-secondary);
  color: var(--color-text-light);
}
.button-secondary-outlined {
  background-color: transparent;
  border-color: var(--color-button-secondary);
  color: var(--color-button-secondary);
}

.button-rounded {
  border-radius: 100px;
}
</style>