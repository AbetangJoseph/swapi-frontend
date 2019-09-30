<template>
  <div class="home">
    <Banner />
    <sectionTitle title="Popular Starships" />
    <div class="container">
      <StarshipCard
        :name="starship.name"
        :model="starship.model"
        :url="starship.url"
        title="Starship Class :"
        :manufacturer="starship.starship_class"
        v-for="(starship, index) in starships"
        v-bind:key="index"
      />
      <Spinner v-if="starships === null" />
    </div>

    <div class="container" style="margin-top: 5rem" v-if="starships">
      <router-link to="/starships">
        <ButtonComponent
          border="2px solid black"
          borderRadius="4"
          btnText="VIEW MORE"
          width="480"
          fontSize="14"
          style="float:none"
        />
      </router-link>
    </div>

    <sectionTitle title="Popular Planets" />

    <Spinner v-if="planets === null" />
    <div class="container" v-if="planets">
      <planetCard :cardTitle="planet.name" v-for="(planet, index) in planets" v-bind:key="index" />
    </div>

    <sectionTitle title="Popular Characters" />

    <div id="popularCharacters">
      <PopularCharacters
        :name="character.name"
        :dob="character.birth_year"
        :gender="character.gender"
        :url="character.url"
        v-for="(character, index) in characters"
        v-bind:key="index"
      />
      <Spinner v-if="starships === null" />
    </div>

    <div class="container" style="margin-top: 5rem; margin-bottom: 5rem;" v-if="characters">
      <router-link to="/characters">
        <ButtonComponent
          border="2px solid black"
          borderRadius="4"
          btnText="VIEW MORE"
          width="480"
          fontSize="14"
          style="float:none"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import sectionTitle from "@/components/titles/sectionTitle.vue";
import StarshipCard from "@/components/StarshipCard.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import planetCard from "@/components/planetCard.vue";
import Spinner from "@/components/Spinner.vue";
import PopularCharacters from "@/components/PopularCharacters.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    Banner,
    sectionTitle,
    StarshipCard,
    ButtonComponent,
    planetCard,
    PopularCharacters,
    Spinner
  },
  data() {
    return {
      starships: null,
      characters: null,
      planets: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/starships`)
      .then(response => {
        this.starships = response.data.results.slice(0, 6);
      })
      .catch(error => {
        this.errors.push(error);
      });

    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        this.characters = response.data.results.slice(0, 4);
      })
      .catch(error => {
        this.errors.push(error);
      });

    axios
      .get(`https://swapi.co/api/planets`)
      .then(response => {
        this.planets = response.data.results.slice(0, 3);
      })
      .catch(error => {
        this.errors.push(error);
      });
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