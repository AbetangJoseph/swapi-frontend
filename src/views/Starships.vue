<template>
  <div>
    <Banner @typing="search($event)" />
    <sectionTitle title="Popular Starships" />

    <div class="container">
      <StarshipCard
        :name="starship.name"
        :model="starship.model"
        title="Starship Class :"
        :url="starship.url"
        :manufacturer="starship.starship_class"
        v-for="(starship, index) in starships"
        v-bind:key="index"
      />
    </div>
    <Spinner v-if="starships === null" />
    <Pagination :meta="meta" :navigate="navigate" v-if="starships" />
  </div>
</template>


<script>
import Banner from "@/components/Banner.vue";
import sectionTitle from "@/components/titles/sectionTitle.vue";
import StarshipCard from "@/components/StarshipCard.vue";
import Pagination from "@/components/Pagination.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";

export default {
  name: "starships",
  components: {
    Banner,
    sectionTitle,
    StarshipCard,
    Pagination,
    Spinner
  },
  data() {
    return {
      starships: null,
      starshipsCopy: null,
      meta: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/starships`)
      .then(response => {
        this.starships = response.data.results;
        this.starshipsCopy = response.data.results;
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
          this.starships = response.data.results;
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
    },
    search(search) {
      if (search.trim() === "") {
        this.starships = this.starshipsCopy;
        return;
      }

      axios
        .get(`https://swapi.co/api/starships/?search=${search}`)
        .then(response => {
          this.starships = response.data.results;
        })
        .catch(error => {
          this.errors.push(error);
        });
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
</style>