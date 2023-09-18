<script>
export default {
  props: {
    cardInfo: Object,
  },

  computed: {
    title() {
      if (this.cardInfo.original_title == this.cardInfo.title) {
        return "";
      } else {
        return ` ( ${this.cardInfo.title} ) `;
      }
    },

    imageUrl() {
      if (this.cardInfo.urlImage == "https://image.tmdb.org/t/p/w342" + null) {
        return "src/assets/img/ifImagesIsNull.jpeg";
      } else {
        return this.cardInfo.urlImage;
      }
    },
  },

  methods: {
    getStar(n) {
      return n <= this.cardInfo.vote
        ? "fa-solid fa-star"
        : "fa-regular fa-star";
    },
  },
};
</script>

<template>
  <!-- CARD -->
  <div class="col">
    <div class="card">
      <img class="cover-image" :src="imageUrl" alt="film image" />
      <div class="card-body">
        <div class="border-bottom pb-2">
          <sapn class="indication">Title :</sapn> {{ cardInfo.original_title }}
          {{ title }}
        </div>
        <div>
          <img
            class="flag-icon mt-2"
            :src="
              'https://www.countryflagicons.com/SHINY/32/' +
              cardInfo.language.toUpperCase() +
              '.png'
            "
            alt="Icon language not found"
          />
        </div>
        <div class="py-2">
          <sapn class="indication">Vote : </sapn>
          <font-awesome-icon :icon="getStar(n)" v-for="n in 5" />
        </div>
        <div
          v-if="cardInfo.overview"
          class="accordion accordion-flush"
          :id="cardInfo.id"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed py-2 border-bottom"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#flush-collapseOne' + cardInfo.id"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <sapn class="indication">Trama </sapn>
              </button>
            </h2>
            <div
              :id="'flush-collapseOne' + cardInfo.id"
              class="accordion-collapse collapse"
              :data-bs-parent="'#' + cardInfo.id"
              style=""
            >
              <div class="accordion-body">
                {{ cardInfo.overview }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  position: relative;
  margin: 0.75rem;
  flex-grow: 1;
  min-height: 450px;
  max-height: 450px;
  overflow: hidden;
  background-color: #dd202e;
  color: white;
  font-weight: 800;
  box-shadow: 5px 5px 5px #dd202e;
  &:hover {
    overflow: auto;

    .card-body {
      display: block;

      opacity: 1;
      background-color: #dd202e;
      transition: opacity, 0.5s;
    }
  }

  .card-body {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: none;
  }

  .indication {
    color: #272727;
    font-size: 1rem;
    font-weight: 700;
  }

  .flag-icon {
    width: 30px;
    aspect-ratio: 1;
  }

  .cover-image {
    min-height: 450px;
    max-height: 450px;
    opacity: 1;
    transition: opacity 0.5s;
    &:hover {
      opacity: 0;
    }
  }

  .accordion-item {
    background-color: #dd202e;
    color: white;

    button {
      background-color: #dd202e;
      color: white;
      padding: 0;
    }
  }
}
</style>
