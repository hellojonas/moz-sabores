<template>
  <div class="logo">
    <span class="left">Moz</span>
    <span class="right">Sabores</span>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  font-size: 1.8rem;
  // display: flex;
  // align-items: center;
  display: inline-block;
  font-weight: 600;

  .left {
    color: var(--color-secondary);
    display: inline-block;
  }

  .right {
    color: var(--color-tertiary);
    margin-bottom: -2px;
    display: inline-block;
  }
}
</style>