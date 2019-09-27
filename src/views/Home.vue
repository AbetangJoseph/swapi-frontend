<template>
  <div class="home">
    <Banner />
    <sectionTitle title="Popular Starships" />
    <div class="container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

    <div class="container" style="margin-top: 5rem">
      <ButtonComponent
        border="2px solid black"
        borderRadius="4"
        btnText="VIEW MORE"
        width="480"
        fontSize="14"
        style="float:none"
      />
    </div>

    <sectionTitle title="Popular Planets" />

    <div class="container">
      <planetCard cardTitle="Corellia" />
      <planetCard cardTitle="Corellia" />
      <planetCard cardTitle="Corellia" />
    </div>

    <sectionTitle title="Popular Characters" />

    <div id="popularCharacters">
      <PopularCharacters />
      <PopularCharacters />
      <PopularCharacters />
      <PopularCharacters />
    </div>

    <div class="container" style="margin-top: 5rem; margin-bottom: 5rem;">
      <ButtonComponent
        border="2px solid black"
        borderRadius="4"
        btnText="VIEW MORE"
        width="480"
        fontSize="14"
        style="float:none"
      />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import sectionTitle from "@/components/titles/sectionTitle.vue";
import Card from "@/components/Card.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import planetCard from "@/components/planetCard.vue";
import PopularCharacters from "@/components/PopularCharacters.vue";

export default {
  name: "home",
  components: {
    Banner,
    sectionTitle,
    Card,
    ButtonComponent,
    planetCard,
    PopularCharacters
  }
};
</script>


<style  scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

#popularCharacters {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 10px;
  justify-content: center;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1360px;
  }
}
</style>