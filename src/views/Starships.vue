<template>
  <div>
    <Banner />
    <sectionTitle title="Popular Starships" />

    <div class="container">
      <Card
        :name="starship.name"
        :model="starship.model"
        title="Starship Class :"
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
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";

export default {
  name: "starships",
  components: {
    Banner,
    sectionTitle,
    Card,
    Pagination,
    Spinner
  },
  data() {
    return {
      starships: null,
      meta: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/starships`)
      .then(response => {
        this.starships = response.data.results;
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