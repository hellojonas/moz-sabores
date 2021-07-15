<template>
  <div class="home">
    <div class="home__header">
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
      <app-container>
        <main class="main">
          <section class="main__highlight">
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

          <section class="main__browse">
            <app-spacer mb="md">
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

            <section class="main__popular">
              <app-spacer mb="base">
                <base-heading type="tertiary">Receitas Populares</base-heading>
              </app-spacer>
              <carousel :items-to-show="1">
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

          <section class="main__add">
            <app-spacer mb="base">
              <base-heading type="secondary">Nova receita</base-heading>
            </app-spacer>
            <div class="new">
              <div class="new__heading">Tens uma receita deliciosa?</div>
              <p class="new__body">Compartile conoso.</p>
              <div class="new__actions">
                <div class="new__button-wrapper">
                  <div class="new__button">
                    <span class="new__button-text">adicionar</span
                    ><ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="main__chefs">
            <app-spacer mb="base">
              <base-heading type="secondary">Chefes Populares</base-heading>
            </app-spacer>
            <div class="main__chef-card" v-for="(chef, idx) in chefs" :key="chef.id" :class="rightAlign(idx)">
              <ChefCard
                :followers="chef.followers"
                :recipes="chef.recipes"
                :name="chef.name"
                :imagePath="chef.image"
              >
                Chefe de cozinha apaixonada pela culinária moçambicana
              </ChefCard>
            </div>
          </section>
        </main>
      </app-container>
    </div>
  </div>
  <app-container></app-container>
</template>

<script>
  import RecipeCard from '@/components/RecipeCard.vue';
  import {Magnify, ArrowRight} from 'mdue';
  import 'vue3-carousel/dist/carousel.css';
  import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
  import ChefCard from '@/components/ChefCard.vue';
import {computed} from "vue";

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
    },
    setup() {
      const recipes = [
        {
          id: '1',
          subtitle: 'Receita do dia',
          title: 'Dobrada de Vaca com Xima',
          author: 'Alberto Martins',
          image: require('../assets/img-1.jpg'),
        },
        {
          id: '2',
          subtitle: 'Gastronomia Moçambicana',
          title: 'Matapa Com Carrangueijo',
          author: 'Alberto Martins',
          image: require('../assets/img-2.jpg'),
        },
        {
          id: '3',
          subtitle: 'Ingrediente da semana - Maçã',
          title: 'Torta de Maçã Com Caramelo',
          author: 'Alberto Martins',
          image: require('../assets/img-3.jpg'),
        },
      ];

      const chefs = [
        {
          id: 1,
          name: 'Anna Cristina',
          description: 'Chefe de cozinha apaixonada pela culinária moçambicana',
          followers: 26,
          recipes: 13,
          image: require('../assets/users/user1.jpg'),
        },
        {
          id: 2,
          name: 'Rogerio Salvador',
          description: 'Chefe de cozinha apaixonada pela culinária moçambicana',
          followers: 26,
          recipes: 13,
          image: require('../assets/users/user2.jpg'),
        },
        {
          id: 3,
          name: 'Selma Tivane',
          description: 'Chefe de cozinha apaixonada pela culinária moçambicana',
          followers: 26,
          recipes: 13,
          image: require('../assets/users/user3.jpg'),
        },
      ];

      const rightAlign = computed(() => {
        return id => {
          return id % 2 !== 0 ?  "chef-card-right" : "";
        }
      })

      return {recipes, chefs, rightAlign};
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    &__header {
      height: 40rem;
      background: url('../assets/hero.jpg') no-repeat;
      background-position: center;
      background-size: cover;
      position: relative;

      &::after {
        content: '';
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
    }

    &__highlight-wrapper {
      margin-bottom: 1.6rem;
    }

    &__browse {
    }

    &__search {
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
    }

    &__search-icon {
      position: absolute;
      top: 70%;
      right: 1rem;
      transform: translateY(-70%);
      font-size: 2rem;
    }

    &__popular {
      margin-top: 3.2rem;
    }
    &__add {
      margin-top: 3.2rem;
    }
    &__chefs {
      margin-top: 3.2rem;
      display: flex;
      flex-direction: column;
    }
    &__chef-card:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  .new {
    padding: 1rem 1.4rem;
    background-color: var(--color-secondary);
    border-radius: 10px;

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
        content: ' ';
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
  }
  .chef-card-right {
    align-self: flex-end;
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
