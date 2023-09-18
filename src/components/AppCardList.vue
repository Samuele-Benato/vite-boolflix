<script>
import AppCard from "./AppCard.vue";
import store from "../../src/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="container">
    <h3 v-if="store.movies.length == 0" class="text-center p-4 text-white">
      Ricerca ogni genere di Movies o TV Series
    </h3>
    <h2 v-else class="p-4 text-white">Movies :</h2>
    <div
      class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center align-items-center g-2"
    >
      <AppCard
        v-for="movie in store.movies"
        :key="movie.id"
        :cardInfo="movie"
      />
    </div>

    <h2 v-if="!store.movies.length == 0" class="p-4 text-white">Series :</h2>
    <div
      class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center align-items-center g-2"
    >
      <AppCard
        v-for="serie in store.series"
        :key="serie.id"
        :cardInfo="serie"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
