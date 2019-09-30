<template>
  <div class="input-group input-group-lg" id="search-box">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-lg">
        <img src="/assets/images/magnifying-glass.svg" alt srcset />
      </span>
    </div>
    <input
      type="text"
      id="search-field"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-lg"
      :placeholder="placeholder"
      v-model="search"
      @keyup="getSearch"
    />
  </div>
</template>


<script>
export default {
  name: "banner",
  props: ["placeholder"],
  data() {
    return {
      search: ""
    };
  },
  methods: {
    getSearch() {
      this.$emit("typing", this.search);
    }
  }
};
</script>


<style scoped>
#search-box {
  width: 70%;
  margin: auto;
}

#search-field {
  height: 60px;
}

.input-group-text {
  background-color: white !important;
}

@media (max-width: 414px) {
  #search-box {
    width: 100%;
    margin: auto;
  }
}
</style>