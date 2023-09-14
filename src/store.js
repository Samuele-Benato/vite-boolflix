import { reactive } from "vue";

const store = reactive({
  apiUrlMovies: "https://api.themoviedb.org/3/search/movie",
  Movies: [],
  apiUrlSeries: "https://api.themoviedb.org/3/search/tv",
  Series: [],
});
export default store;
