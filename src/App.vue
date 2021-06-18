<template>
    <NavBar />
    <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  setup() {},
};
</script>

<style src="@/config/variable.css">
</style>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
