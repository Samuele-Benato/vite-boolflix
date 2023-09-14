<script>
import AppCard from "./components/AppCard.vue";
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
  <AppCard />
</template>

<style lang="scss" scoped></style>
