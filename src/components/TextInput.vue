<template>
  <div class="input">
    <input v-bind="$attrs" class="input__field" />
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: flex;

  &__field {
    width: 0;
    flex: 1;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    color: var(--color-text-body);
    padding: 1.4rem 1rem;
    border-radius: 5px;
    border: 1px solid transparent;
    font-weight: 600;
    box-shadow: var(--shadow);
  }
}
</style>
