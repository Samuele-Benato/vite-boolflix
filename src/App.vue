<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import store from "./store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    fetchMovies(endpoint, queryString) {
      axios
        .get(endpoint, {
          params: {
            api_key: this.store.api_key,
            query: queryString,
          },
        })
        .then((response) => {
          this.store.movies = response.data.results.map((movie) => {
            const {
              id,
              original_language,
              original_title,
              title,
              poster_path,
              vote_average,
              overview,
            } = movie;
            return {
              id,
              language: original_language,
              original_title,
              title,
              urlImage: "https://image.tmdb.org/t/p/w342" + poster_path,
              vote: Math.ceil(vote_average / 2),
              overview,
            };
          });
        });
    },

    fetchSeries(endpoint, queryString) {
      axios
        .get(endpoint, {
          params: { api_key: this.store.api_key, query: queryString },
        })
        .then((response) => {
          this.store.series = response.data.results.map((serie) => {
            const {
              id,
              original_language,
              original_name,
              name,
              poster_path,
              vote_average,
              overview,
            } = serie;
            return {
              id,
              language: original_language,
              original_title: original_name,
              title: name,
              urlImage: "https://image.tmdb.org/t/p/w342" + poster_path,
              vote: Math.ceil(vote_average / 2),
              overview,
            };
          });
        });
    },

    startSearch(queryString) {
      this.fetchMovies(store.apiUrlMovies, queryString);
      this.fetchSeries(store.apiUrlSeries, queryString);
    },
  },

  created() {
    this.fetchMovies(this.store.apiUrlMovies);
    this.fetchSeries(this.store.apiUrlSeries);
  },

  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader @search="startSearch" />

  <AppMain />
</template>

<style lang="scss" scoped>
@use "./assets/style.scss" as *;
</style>
