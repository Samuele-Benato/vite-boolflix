<script>
const initialTitle = document.getElementById("initial-title");
const categoryTitle = document.getElementById("category-title");
export default {
  data() {
    return {
      term: "",
    };
  },

  emits: ["serch"],

  methods: {
    changeTitle() {
      categoryTitle.classList.add("d-block");
      initialTitle.classList.add("d-none");
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div>
        <img src="src/assets/img/boolfix.jpg" alt="boolfix" />
      </div>

      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <form
            class="d-flex"
            role="search"
            @submit.prevent="$emit('search', term)"
          >
            <input
              v-model="term"
              class="form-control me-2"
              type="search"
              placeholder="Cerca un titolo..."
              aria-label="Search"
            />
            <button class="btn btn-outline-danger" type="submit">INVIA</button>
          </form>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #f8f9fa;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      img {
        max-width: 100%;
        min-width: 50%;
      }
    }
  }
}
</style>
