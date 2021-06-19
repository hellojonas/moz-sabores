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
        </main>
      </app-container>
    </div>
  </div>
  <app-container></app-container>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  components: {
    RecipeCard,
  },
  setup() {
    const recipes = [
      {
        id: "1",
        subtitle: "Receita do dia",
        title: "Dobrada de Vaca com Xima",
        author: "Alberto Martins",
        image: require("../assets/img-1.jpg")
      },
      {
        id: "2",
        subtitle: "Gastronomia Moçambicana",
        title: "Matapa Com Carrangueijo",
        author: "Alberto Martins",
        image: require("../assets/img-2.jpg")
      },
      {
        id: "3",
        subtitle: "Ingrediente da semana - Maçã",
        title: "Torta de Maçã Com Caramelo",
        author: "Alberto Martins",
        image: require("../assets/img-3.jpg")
      },
    ];

    return { recipes };
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
  }

  &__highlight-wrapper {
    margin-bottom: 1.6rem;
  }
}
</style>