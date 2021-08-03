<template>
  <div class="home">
    <div class="home__header" id="home" ref="homeRef">
      <app-container>
        <div class="home__text-box">
          <app-spacer mb="lg">
            <base-heading class="home__heading" defaultColor>
              <span>Seu Paladar</span>
              <span>A Merce De Um Click</span>
            </base-heading>
          </app-spacer>
          <app-spacer textCenter>
            <base-button>Junte-se Agora</base-button>
          </app-spacer>
        </div>
      </app-container>
      <main class="main">
        <app-container>
          <section class="main__highlight" id="highligth">
            <div
              class="main__highlight-wrapper"
              v-for="recipe in recipes"
              :key="recipe.id"
            >
              <RecipeCard
                :subtitle="recipe.subtitle"
                :title="recipe.title"
                :author="recipe.author"
                :imagePath="recipe.image"
              />
            </div>
          </section>

          <section ref="searchRef" class="main__browse" id="search">
            <app-spacer mb="md" text-center>
              <base-heading type="secondary">Procurar Receita</base-heading>
            </app-spacer>
            <div class="main__search">
              <div class="main__search-input-box">
                <input
                  type="text"
                  class="main__search-input"
                  placeholder="ex: aneis de cebola"
                />
                <div class="main__search-icon">
                  <Magnify />
                </div>
              </div>

              <app-spacer textCenter>
                <base-button type="secondary">Procurar</base-button>
              </app-spacer>
            </div>

            <section class="main__popular" id="popular">
              <app-spacer mb="md">
                <base-heading type="tertiary">Receitas Populares</base-heading>
              </app-spacer>

              <carousel :items-to-show="isMidScreen ? 3 : 1">
                <slide v-for="recipe in recipes" :key="recipe.id">
                  <RecipeCard
                    :subtitle="recipe.subtitle"
                    :title="recipe.title"
                    :author="recipe.author"
                    :imagePath="recipe.image"
                  />
                </slide>
                <template #addons>
                  <Pagination />
                  <Navigation />
                </template>
              </carousel>
            </section>
          </section>
        </app-container>

        <div class="section-separator">
          <app-container>
            <section class="main__add" id="new">
              <app-spacer mb="base">
                <base-heading type="secondary">Nova receita</base-heading>
              </app-spacer>
              <div class="main__add-new">
                <div class="new">
                  <div class="new__heading">Tens uma receita deliciosa?</div>
                  <p class="new__body">Compartilhe conoso.</p>
                  <div class="new__actions">
                    <div class="new__button-wrapper">
                      <div class="new__button">
                        <span class="new__button-text">adicionar</span
                        ><ArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </app-container>
        </div>

        <app-container>
          <section ref="chefsRef" class="main__chefs" id="chefs">
            <app-spacer mb="base">
              <base-heading type="secondary">Chefes Populares</base-heading>
            </app-spacer>
            <div class="main__chefs-wrapper">
              <div class="main__chef-cards">
                <div
                  class="main__chef-card"
                  v-for="(chef, idx) in chefs"
                  :key="chef.id"
                  :class="rightAlign(idx)"
                >
                  <ChefCard
                    :followers="chef.followers"
                    :recipes="chef.recipes"
                    :name="chef.name"
                    :imagePath="chef.image"
                  >
                    {{ chef.description }}
                  </ChefCard>
                </div>
              </div>
            </div>
          </section>
        </app-container>

        <div class="section-separator">
          <app-container>
            <section ref="signup" class="main__signup" id="signup">
              <app-spacer mb="lg">
                <base-heading :level="2">
                  Criar Conta
                </base-heading>
              </app-spacer>
              <div class="main__signup-wrapper">
                <form action="" class="main__signup-form" @submit.prevent="">
                  <app-spacer mb="md">
                    <app-spacer mb="sm">
                      <input-label>Nome</input-label>
                    </app-spacer>
                    <TextInput placeholder="Jonh Doe" />
                  </app-spacer>
                  <app-spacer mb="md">
                    <app-spacer mb="sm">
                      <input-label>Email</input-label>
                    </app-spacer>
                    <TextInput type="email" placeholder="djohn@example.com" />
                  </app-spacer>
                  <app-spacer mb="sm">
                    <input-label>Senha</input-label>
                  </app-spacer>
                  <TextInput
                    type="password"
                    placeholder="deve conter mais de 8 letras"
                  />
                  <app-spacer mt="lg" textCenter>
                    <base-button type="primary">Criar Conta</base-button>
                  </app-spacer>
                </form>
              </div>
            </section>
          </app-container>
        </div>
      </main>

      <footer class="footer">
        <app-spacer textCenter mb="md">
          <AppLogo />
        </app-spacer>
        <div class="footer__social">
          <Facebook class="footer__icon" />
          <Instagram class="footer__icon" />
          <Twitter class="footer__icon" />
        </div>
        <div class="footer__copyright">copyright &copy; 2021</div>
      </footer>
    </div>
  </div>
</template>

<script>
// TODO: links to sections
// FIX: Navigation in Large
// TODO: Hover on highliht recipe card
// FIX: Responsivity on highlight recipe card

import RecipeCard from "@/components/RecipeCard.vue";
import { Magnify, ArrowRight, Facebook, Twitter, Instagram } from "mdue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ChefCard from "@/components/ChefCard.vue";
import TextInput from "@/components/TextInput.vue";
import InputLabel from "@/components/InputLabel.vue";
import { computed, inject, ref } from "vue";
import BaseButton from "../components/BaseButton.vue";
import AppLogo from "@/components/AppLogo.vue";
import { useMediaQuery } from "@vueuse/core";

export default {
  components: {
    RecipeCard,
    ArrowRight,
    Magnify,
    Carousel,
    Slide,
    Navigation,
    Pagination,
    ChefCard,
    TextInput,
    InputLabel,
    BaseButton,
    AppLogo,
    Facebook,
    Twitter,
    Instagram,
  },
  setup() {
    const recipes = [
      {
        id: "1",
        subtitle: "Receita do dia",
        title: "Dobrada de Vaca com Xima",
        author: "Alberto Martins",
        image: require("../assets/img-1.jpg"),
      },
      {
        id: "2",
        subtitle: "Gastronomia Moçambicana",
        title: "Matapa Com Carrangueijo",
        author: "Alberto Martins",
        image: require("../assets/img-2.jpg"),
      },
      {
        id: "3",
        subtitle: "Ingrediente da semana - Maçã",
        title: "Torta de Maçã Com Caramelo",
        author: "Alberto Martins",
        image: require("../assets/img-3.jpg"),
      },
    ];

    const chefs = [
      {
        id: 1,
        name: "Anna Cristina",
        description: "Chefe de cozinha apaixonada pela culinária moçambicana",
        followers: 26,
        recipes: 13,
        image: require("../assets/users/user1.jpg"),
      },
      {
        id: 2,
        name: "Rogerio Salvador",
        description: "Chefe de cozinha apaixonada pela culinária moçambicana",
        followers: 26,
        recipes: 13,
        image: require("../assets/users/user2.jpg"),
      },
      {
        id: 3,
        name: "Selma Tivane",
        description: "Chefe de cozinha apaixonada pela culinária moçambicana",
        followers: 26,
        recipes: 13,
        image: require("../assets/users/user3.jpg"),
      },
    ];

    const rightAlign = computed(() => {
      return (id) => {
        return id % 2 !== 0 ? "chef-card-right" : "";
      };
    });

    const isMidScreen = useMediaQuery("(min-width: 600px)");

    let sectionRefs = inject("sectionRefs");

    const chefsRef = ref(null);
    const searchRef = ref(null);
    const homeRef = ref(null);

    sectionRefs["homeRef"] = homeRef;
    sectionRefs["searchRef"] = searchRef;
    sectionRefs["chefsRef"] = chefsRef;

    return {
      recipes,
      chefs,
      rightAlign,
      isMidScreen,
      chefsRef,
      searchRef,
      homeRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__header {
    height: 40rem;
    background: url("../assets/hero.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 40rem;
      width: 100%;
      background-color: var(--color-hero-overlay);
    }
  }

  &__text-box {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -55%);
    z-index: var(--stack-first);
    max-width: 32rem;
    width: 100%;
  }

  &__heading {
    display: flex;
    flex-direction: column;
    color: var(--color-text-light);
  }
}

.main {
  margin-top: 32rem;

  &__highlight {
    position: relative;
    z-index: var(--stack-2);
    margin-top: -4rem;
    margin-bottom: 4rem;

    // & > *:hover {
    //   border: 5px solid red;
    //   z-index: var(--stack-4);
    // }

    @media only screen and (min-width: 1100px) {
      position: relative;
      height: 45rem;
    }
  }

  &__highlight-wrapper {
    margin: 0 auto 1.6rem auto;
    max-width: 42rem;
    
    @media only screen and (min-width: 1100px) {
      position: absolute;
      width: 50rem;

      &:nth-child(1) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
      }
      &:nth-child(2) {
        top: 10%;
        left: 3%;
        z-index: 2;
      }
      &:nth-child(3) {
        top: 15%;
        right: 4%;
        z-index: 1;
      }
    }

    @media only screen and (min-width: 1180px) {
      transition: transform 200ms;
      &:nth-child(1) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        &:hover {
          transform: translateX(-50%) scale(1.1);
        }
      }
      &:nth-child(2) {
        top: 10%;
        left: 10%;

        &:hover {
          transform: scale(1.1);
        }
      }
      &:nth-child(3) {
        top: 15%;
        right: 10%;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  &__highlight > *:hover {
    z-index: var(--stack-4);
  }

  &__browse {
    padding-bottom: 5.6rem;
  }

  &__search {
    max-width: 60rem;
    margin: 0 auto;
  }

  &__search-input-box {
    display: flex;
    position: relative;
    margin-bottom: 1.6rem;
  }

  &__search-input {
    width: 0;
    flex: 1;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    color: var(--color-text-body);
    padding: 1.4rem 1rem;
    border-radius: 5px;
    border: 1px solid transparent;
  }

  &__search-icon {
    position: absolute;
    top: 70%;
    right: 1rem;
    transform: translateY(-70%);
    font-size: 2rem;
  }

  &__popular {
    // margin-top: 3.2rem;
  }

  &__add {
    // margin-top: 3.2rem;
  }

  &__add-new {
    @media only screen and (min-width: 840px) {
      position: relative;
      height: 40rem;
      background: url("../assets/chef.svg") no-repeat;
      background-size: contain;
    }
    @media only screen and (min-width: 1120px) {
      height: 60rem;
    }
  }

  &__chefs {
    padding: 5.6rem 0;
  }
  &__chefs-wrapper {
    @media only screen and (min-width: 840px) {
      position: relative;
      height: 40rem;
      background: url("../assets/cooking.svg") no-repeat;
      background-size: contain;
      background-position: right;
    }
    @media only screen and (min-width: 1120px) {
      height: 60rem;
    }
  }
  &__chef-cards {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 840px) {
      max-width: 50rem;
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__chef-card:not(:last-child) {
    margin-bottom: 1rem;
  }

  &__signup {
  }

  &__signup-wrapper {
    display: flex;
    align-content: center;

    justify-content: center;
    @media only screen and (min-width: 520px) {
      // height: 300rem;
    }

    @media only screen and (min-width: 1300px) {
      background: url("../assets/account.svg") no-repeat;
      background-size: contain;
      background-position: left;
      justify-content: flex-end;
      align-items: center;
      height: 30rem;
    }

    @media only screen and (min-width: 1500px) {
      height: 35rem;
      padding-right: 10rem;
    }

    @media only screen and (min-width: 1700px) {
      height: 40rem;
    }
  }

  &__signup-form {
    flex: 1;

    @media only screen and (min-width: 520px) {
      flex: 0 0 50rem;
    }
    @media only screen and (min-width: 840px) {
      flex: 0 0 45rem;
    }
  }
}

.new {
  padding: 1rem 1.4rem;
  background-color: var(--color-secondary);
  border-radius: 10px;
  max-width: 48rem;
  width: 100%;

  &__heading {
    color: var(--text-body);
    font-weight: 600;
    font-size: 1.4rem;
  }
  &__body {
    color: var(--text-body);
    font-size: 1.2rem;
    margin-bottom: 2.4rem;
  }
  &__actions {
    text-align: right;
  }
  &__button-wrapper {
    display: inline-block;

    &::after {
      content: " ";
      display: block;
      width: 100%;
      height: 2px;
      background-color: transparent;
    }

    &:hover {
      cursor: pointer;
      &::after {
        background-color: var(--color-tertiary);
      }
    }
  }
  &__button {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-tertiary);
    letter-spacing: 0.1em;
  }
  &__button-text {
    margin-right: 0.4rem;
  }

  @media only screen and (min-width: 840px) {
    position: absolute;
    top: 40%;
    right: 10%;
    transform: translateY(-40%);
  }
}
.chef-card-right {
  align-self: flex-end;
}

.footer {
  text-align: center;
  padding: 6.4rem 0 3.2rem;

  &__social {
    color: var(--color-text-dark);
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  &__icon {
    &:not(:last-child) {
      margin-right: 0.8rem;
    }

    &:hover {
      color: var(--color-tertiary);
    }
  }

  &__copyright {
    font-size: 1.2rem;
  }
}

.section-separator {
  background-color: var(--color-section-separator);
  padding: 5.6rem 0;
}
</style>

<style lang="scss">
.carousel,
.carousel__track,
.carousel__viewport {
  background-color: transparent;
}
.carousel__slide {
  &:not(:last-child) {
    margin-right: 1rem;
  }
}
.carousel__prev,
.carousel__next {
  background-color: var(--color-primary);
  border: 3px solid var(--color-secondary);
}
.carousel__pagination-button {
  background-color: var(--color-secondary);
}
.carousel__pagination-button--active {
  background-color: var(--color-tertiary);
}
</style>
