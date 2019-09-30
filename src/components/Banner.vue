<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <router-link to="/">
        <img src="/assets/images/logo.png" alt="Star Wars Logo" id="top-left-logo" />
      </router-link>
      <div id="banner-header">
        <img src="/assets/images/logo.png" alt="Star Wars Logo" id="center-logo" />
        <h2 id="Directory">Directory</h2>
      </div>
      <hr />
      <p id="find-favorite">
        Find your favorite Characters, Films, Species,
        <br />Starships and Planets
      </p>
      <SearchField placeholder="Enter a search term" @typing="sendToHome($event)" />
    </div>
  </div>
</template>

<script>
import SearchField from "@/components/SearchField.vue";

export default {
  name: "banner",
  components: {
    SearchField
  },
  methods: {
    sendToHome(search) {
      this.$emit("typing", search);
    }
  }
};
</script>

<style  scoped>
.jumbotron {
  background-image: url("/assets/images/hero-banner.jpg");
  height: 620px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#top-left-logo {
  height: 48px;
  width: 130px;
  position: absolute;
  top: 35px;
  left: 45px;
}

#find-favorite {
  color: #ddd8d8;
  font-size: 22px;
  text-align: center;
  letter-spacing: 1px;
}

hr {
  background: white;
  height: 1px;
  width: 18rem;
}

#center-logo {
  height: 48px;
  width: 130px;
}

#Directory {
  font-weight: bolder;
  color: white;
  text-align: center;
  font-weight: 800;
  margin-left: 1rem;
}

#banner-header {
  justify-content: center;
  margin-top: 7.5rem;
  display: flex;
}
</style>

