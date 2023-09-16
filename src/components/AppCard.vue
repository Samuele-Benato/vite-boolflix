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
};
</script>

<template>
  <!-- CARD -->
  <div class="col">
    <div class="card">
      <img :src="imageUrl" alt="film image" />
      <div class="card-body">
        <div>Title : {{ cardInfo.original_title }} {{ title }}</div>
        <div>Language : {{ cardInfo.language }}</div>
        <div>Vote : {{ cardInfo.vote }}</div>
        <div
          v-if="cardInfo.overview"
          class="accordion accordion-flush"
          :id="cardInfo.id"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#flush-collapseOne' + cardInfo.id"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Trama
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
  flex-grow: 1;
  min-height: 450px;
  max-height: 450px;
  overflow: hidden;
  background-color: #dd202e;
  color: white;
  &:hover {
    overflow: auto;
  }

  img {
    min-height: 340px;
    max-height: 340px;
  }

  .accordion-item {
    background-color: #dd202e;
    color: white;
    button {
      background-color: #dd202e;
      color: white;
    }
  }
}
</style>
