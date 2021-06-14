<template>
  <div>
    <div class="container">
      <sectionTitle title="Character" />
      <div class="container">
        <Spinner v-if="character === null" />
      </div>

      <div class="container" v-if="character">
        <div class="card mt-5" style="width: 23rem;">
          <div class="card-body" style="text-align:center">
            <h5 class="card-title text-muted">{{character && character.name}}</h5>

            <p class="text-muted">
              <small class="text-muted">
                gender:
                {{character && character.gender }}
              </small>
            </p>
            <p class="text-muted">
              <small class="text-muted">
                d.o.b:
                {{character && character.birth_year }}
              </small>
            </p>

            <p class="text-muted">
              <small class="text-muted">skin color: {{character && character.skin_color}}</small>
            </p>

            <p>
              <small class="text-muted">eye color: {{character && character.eye_color}}</small>
            </p>

            <p>
              <small class="text-muted">height: {{character && character.height}}cm</small>
            </p>

            <p>
              <small class="text-muted">weight: {{character && character.mass}}kg</small>
            </p>
          </div>
        </div>
      </div>
      <router-link to="/characters">
        <button type="button" class="btn btn-secondary mt-4">back</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import sectionTitle from "@/components/titles/sectionTitle.vue";
import Spinner from "@/components/Spinner.vue";

import axios from "axios";

export default {
  components: {
    sectionTitle,
    Spinner
  },
  data() {
    return {
      character: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`http://swapiapi/people/${this.$route.params.id}/`)
      .then(response => {
        this.character = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>