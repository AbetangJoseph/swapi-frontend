<template>
  <div>
    <Banner />
    <sectionTitle title="Popular Starships" />

    <div class="container" >
      <Card />
      <Card />
      <Card />
    </div>
    <Pagination />
  </div>
</template>


<script>
import Banner from "@/components/Banner.vue";
import sectionTitle from "@/components/titles/sectionTitle.vue";
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "starships",
  components: {
    Banner,
    sectionTitle,
    Card,
    Pagination
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1360px;
  }
}
</style>