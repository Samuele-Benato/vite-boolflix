<script>
import AppCardList from "./AppCardList.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppCardList,
  },
};
</script>

<template>
  <main>
    <AppCardList />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #272727;

  min-height: calc(100vh - (134px + 86px));
  padding-bottom: 1.5rem;
}
</style>
