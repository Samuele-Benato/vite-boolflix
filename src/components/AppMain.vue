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
  min-height: 100vh;
  height: 100%;
}
</style>
