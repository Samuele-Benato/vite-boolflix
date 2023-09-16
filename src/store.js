import { reactive } from "vue";

const store = reactive({
  api_key: "f308f8ff8d878c47fe071a7f8c4108a8",
  apiUrlMovies: "https://api.themoviedb.org/3/search/movie",
  movies: [],
  apiUrlSeries: "https://api.themoviedb.org/3/search/tv",
  series: [],
});
export default store;
