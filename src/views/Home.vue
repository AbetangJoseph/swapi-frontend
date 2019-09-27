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
      <Button
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
      <planetCard cardTitle="Corellia"/>
      <planetCard cardTitle="Corellia"/>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import sectionTitle from "@/components/titles/sectionTitle.vue";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import planetCard from "@/components/planetCard.vue";

export default {
  name: "home",
  components: {
    Banner,
    sectionTitle,
    Card,
    Button,
    planetCard
  }
};
</script>


<style  scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1400px;
  }
}
</style>