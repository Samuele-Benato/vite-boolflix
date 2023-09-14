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
    fetchMovies(endpoint) {
      axios
        .get(endpoint, {
          params: { api_key: this.store.api_key, query: "anelli" },
        })
        .then((response) => {
          console.log(response.data.results);
          const moviesData = response.data.results.map((movie) => {
            const {
              id,
              original_language,
              original_title,
              title,
              poster_path,
              vote_average,
            } = movie;
            return {
              id,
              original_language,
              original_title,
              title,
              poster_path,
              vote_average,
            };
          });
          return {
            id,
            original_language,
            original_title,
            title,
            poster_path,
            vote_average,
          };
        });
    },

    fetchSeries(endpoint) {
      axios
        .get(endpoint, {
          params: { api_key: this.store.api_key, query: "anelli" },
        })
        .then((response) => {
          const seriesData = response.data.results.map((serie) => {
            const {
              id,
              original_language,
              original_name,
              name,
              poster_path,
              vote_average,
            } = serie;
            return {
              id,
              original_language,
              original_name,
              name,
              poster_path,
              vote_average,
            };
          });
          return {
            id,
            original_language,
            original_name,
            name,
            poster_path,
            vote_average,
          };
        });
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
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
