<template>
  <div class="menu" :class="colorizeNav">
    <div class="overlay" v-if="showMenu" @click.prevent="closeMenu"></div>
    <app-container>
      <div class="menu__box">
        <div class="menu__logo">
          <AppLogo />
        </div>
        <div class="menu__toggler" @click="toggleMenu" :class="togglerColor">
          <Menu v-if="!showMenu" />
          <Close v-else />
        </div>
        <transition>
          <div class="menu__nav-menu" v-if="showMenu">
            <ul class="menu__nav-list">
              <div class="menu__nav-account">
                <li
                  v-for="al in accountLinks"
                  :key="al.label"
                  @click.prevent="closeMenu"
                >
                  <router-link :to="al.to">
                    <base-button
                      :outlined="al.outlined"
                      :rounded="al.rounded"
                      :textButton="al.isText"
                      >{{ al.label }}</base-button
                    >
                  </router-link>
                </li>
              </div>

              <div class="menu__nav-links">
                <li
                  class="menu__nav-item"
                  v-for="link in links"
                  :key="link.label"
                  @click.prevent="closeMenu"
                >
                  <router-link :to="link.to" class="menu__nav-link">
                    {{ link.label }}
                  </router-link>
                </li>
              </div>
            </ul>
            <div class="menu__social">
              <div
                class="menu__social-icon"
                v-for="si in socialIcons"
                :key="si.label"
              >
                <component :is="si.icon"></component>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </app-container>
  </div>
</template>

<script>
import { Menu, Close, Facebook, Twitter, Instagram } from "mdue";
import AppLogo from "./AppLogo.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

export default {
  components: {
    Menu,
    Facebook,
    Twitter,
    Instagram,
    AppLogo,
    Close,
  },
  props: { colorize: Boolean },
  setup(props) {
    const route = useRoute();

    const isHome = computed(() => route.path === "/");

    const colorizeNav = computed(() =>
      props.colorize ? "menu-filled" : "menu-transparent"
    );

    const showMenu = ref(false);

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    const closeMenu = () => {
      showMenu.value = false;
    };

    const togglerColor = computed(() => ({ "toggler-dark": showMenu.value }));

    const links = [
      { to: "#", label: "Início" },
      { to: "#", label: "Procurar" },
      { to: "#", label: "Chefs" },
    ];

    const socialIcons = [
      { icon: "Facebook", to: "#" },
      { icon: "Instagram", to: "#" },
      { icon: "Twitter", to: "#" },
    ];

    const accountLinks = [
      {
        to: "#",
        label: "Entrar",
        rounded: true,
        outlined: true,
        isText: false,
      },
      {
        to: "#",
        label: "Registrar",
        rounded: true,
        outlined: false,
        isText: true,
      },
    ];

    return {
      isHome,
      colorizeNav,
      showMenu,
      closeMenu,
      toggleMenu,
      togglerColor,
      links,
      socialIcons,
      accountLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--stack-5);
  width: 100%;
  transition: background-color 200ms;

  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__toggler {
    position: relative;
    z-index: var(--stack-5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .4rem;
    color: var(--color-text-light);
    font-size: 1.8rem;

    &:hover {
      cursor: pointer;
    }
  }

  &__nav-menu {
    color: var(--color-text-light);
    position: absolute;
    top: 0;
    right: 0;
    width: 70vw;
    background: var(--color-menu);
    padding: 0 1.6rem;
  }

  &__nav-list {
    height: 92vh;
    padding-top: 8rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  &__nav-account {
    display: flex;
    justify-content: space-around;
    margin-bottom: 6.4rem;
  }

  &__nav-links {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
  }

  &__nav-item {
    margin-bottom: 2.4rem;
  }

  &__nav-link {
    text-decoration: none;
    color: var(--color-text-dark);

    &:hover {
      color: var(--color-tertiary);
    }
  }

  &__social {
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
  }

  &__social-icon {
    color: var(--color-text-dark);

    &:hover {
      cursor: pointer;
      color: var(--color-tertiary);
    }

    &:not(:last-child) {
      margin-right: .8rem;
    }
  }
}

.menu-transparent {
  background-color: transparent;
}

.menu-filled {
  background-color: var(--color-primary);
  box-shadow: var(--shadow);
}

.overlay {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
}

.toggler-dark {
  color: var(--color-text-dark);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: transform 200ms ease-in, opacity 200ms ease-in;
}

.v-enter-to,
.v-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>