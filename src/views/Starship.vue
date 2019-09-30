<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <router-link to="/">
          <img src="/assets/images/logo.png" alt="Star Wars Logo" id="top-left-logo" />
        </router-link>
        <div id="banner-header">
          <!-- <div class="col-m-4 text-center"> -->
          <!-- <img
            :src="`/assets/images/starship-${Math.ceil(Math.random() * 6)}.jpg`"
            alt="Star Wars Logo"
            id="center-logo"
            max-width="700"
            height="400"
          />-->
          <!-- </div> -->
        </div>
      </div>
    </div>
    <Spinner v-if="starship === null" />

    <div class="container" v-if="starship">
      <h2 class="card-title">{{starship && starship.name}}</h2>
      <p style=" color: rgb(85, 84, 84);">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sunt veritatis accusamus? Numquam doloremque rem error quasi adipisci mollitia, facere fuga dolor quis sed cum quisquam quia reprehenderit architecto debitis beatae aspernatur amet officia laborum hic, quaerat dolores? Numquam quam illo doloribus similique eaque nobis sed assumenda, omnis quisquam. Dolores molestiae eos ullam. Natus dicta magnam sapiente ratione accusamus fuga, dolorum repellat nesciunt illum nemo voluptatibus, tenetur nisi quidem, cupiditate velit hic iusto voluptas delectus maxime odit? Ratione nostrum, recusandae est illo.
        <br />
        <br />optio libero ipsa assumenda nesciunt nam sequi, officia iusto tenetur quae totam beatae eos odio asperiores provident nemo doloribus obcaecati! Doloribus officia eligendi quia reprehenderit aliquid laborum odio cumque facere.
        Harum voluptatum minus unde aliquam obcaecati perferendis perspiciatis eaque culpa itaque alias repudiandae eum atque nihil, quasi, animi molestiae labore dolores ex odio! Quisquam nulla sed dolores ipsa minus eaque in illo quidem architecto? Vero, veniam iusto nulla doloribus nobis doloremque rem eius totam, similique sapiente, fugit ipsa molestiae dicta repellendus necessitatibus alias expedita reiciendis minima assumenda eligendi maiores animi! Optio maxime necessitatibus dolorum laudantium expedita aspernatur dolorem numquam voluptates, hic modi temporibus consequatur consequuntur iste alias voluptas quos voluptatibus, omnis quia nesciunt! Vero laborum voluptates accusantium deleniti!
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "starship",
  components: {
    Spinner
  },
  data() {
    return {
      starship: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/starships/${this.$route.params.id}`)
      .then(response => {
        this.starship = response.data;
        console.log(response);
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
};
</script>


<style scoped>
.jumbotron {
  background-image: url("/assets/images/hero-banner.jpg");
  height: 620px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  font-family: "Montserrat", sans-serif;
  line-height: 40px;
}

.card-title {
  font-weight: 600;
  color: rgb(75, 74, 74);
}

#top-left-logo {
  height: 48px;
  width: 130px;
  position: absolute;
  top: 35px;
  left: 45px;
}

#banner-header {
  justify-content: center;
  margin-top: 7.5rem;
  display: flex;
}

@media (min-width: 1200px) {
  .container {
    max-width: 750px;
  }
}
</style>