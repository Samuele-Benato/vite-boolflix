<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },

  methods: {
    fetchMovies() {
      axios.get().then((response) => {
        const moviesData = response.data.results.map((movie) => {
          const {
            id,
            original_language,
            original_title,
            title,
            poster_path,
            vote_average,
          } = movie;
          return moviesData, movie;
        });
        return moviesData, movie;
      });
    },

    fetchSeries() {
      axios.get().then((response) => {
        const seriesData = response.data.results.map((serie) => {
          const {
            id,
            original_language,
            original_name,
            name,
            poster_path,
            vote_average,
          } = serie;
          return seriesData, serie;
        });
        return seriesData, serie;
        console.log(seriesData, serie);
      });
    },
  },

  created() {
    this.fetchMovies(store.apiUrlMovies);
    this.fetchSeries(store.apiUrlSeries);
  },

  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
