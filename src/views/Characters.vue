<template>
  <div>
    <Banner />
    <sectionTitle title="Starwars Characters" />

    <div class="container" id="option">
      FILTER
      <Option option1="Male" option2="Female" />VIEW
      <Option option1="Grid" option2="Flex" />
    </div>
    <div id="popularCharacters">
      <PopularCharacters />
      <PopularCharacters />
      <PopularCharacters />
      <PopularCharacters />
    </div>

    <Pagination />
  </div>
</template>


<script>
import Banner from "@/components/Banner.vue";
import sectionTitle from "@/components/titles/sectionTitle.vue";
import PopularCharacters from "@/components/PopularCharacters.vue";
import Pagination from "@/components/Pagination.vue";
import Option from "@/components/Option.vue";

export default {
  name: "starships",
  components: {
    Banner,
    sectionTitle,
    Pagination,
    Option,
    PopularCharacters
  }
};
</script>


<style scoped>
#popularCharacters {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 10px;
  justify-content: center;
}
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

#option {
  justify-content: flex-start;
  align-content: center;
  max-width: 1250px;
}
</style>