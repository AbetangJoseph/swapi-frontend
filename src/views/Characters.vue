<template>
  <div>
    <Banner />
    <sectionTitle title="Starwars Characters" />

    <div class="container" id="option" v-if="characters">
      FILTER
      <Option :options="genderOptions" :isSelected="isGenderSelected" :onChange="onChange" />VIEW
      <Option :options="displayOptions" />
    </div>

    <div class="container">
      <PopularCharacters
        :name="character.name"
        :dob="character.birth_year"
        :gender="character.gender"
        v-for="(character, index) in characters"
        v-bind:key="index"
      />
    </div>

    <Spinner v-if="characters === null" />
    <Pagination :meta="meta" :navigate="navigate" v-if="characters" />
  </div>
</template>


<script>
import Banner from "@/components/Banner.vue";
import sectionTitle from "@/components/titles/sectionTitle.vue";
import PopularCharacters from "@/components/PopularCharacters.vue";
import Pagination from "@/components/Pagination.vue";
import Option from "@/components/Option.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";

export default {
  name: "characters",
  components: {
    Banner,
    sectionTitle,
    Pagination,
    Option,
    PopularCharacters,
    Spinner
  },
  data() {
    return {
      characters: null,
      charactersCopy: null,
      meta: null,
      errors: [],
      genderOptions: ["Male", "Female", "N/A"],
      displayOptions: ["Grid", "Flex"],
      isGenderSelected: true
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        this.characters = response.data.results;
        this.charactersCopy = response.data.results;
        this.meta = {
          next: response.data.next,
          previous: response.data.previous,
          count: response.data.count,
          current: "1"
        };
      })
      .catch(error => {
        this.errors.push(error);
      });
  },
  methods: {
    navigate(url) {
      axios
        .get(url)
        .then(response => {
          this.characters = response.data.results;
          this.charactersCopy = response.data.results;
          this.meta = {
            next: response.data.next,
            previous: response.data.previous,
            count: response.data.count,
            current: response.config.url[response.config.url.length - 1]
          };
        })
        .catch(error => {
          this.errors.push(error);
        });

      this.isGenderSelected = true;
    },
    onChange($event) {
      let selected = JSON.stringify($event.target.value);

      if ($event.target.value == "Select...") {
        this.characters = this.charactersCopy;
        return;
      }

      if ($event.target.value !== "Select...") {
        this.isGenderSelected = false;
      }

      this.characters = this.charactersCopy.filter(
        character => JSON.stringify(character.gender) === selected
      );
    }
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1280px;
  }
}

#option {
  justify-content: flex-start;
  align-content: center;
  max-width: 1280px;
}
</style>