<template>
  <div class="card" style="max-width: 600px; max-height: 600px;">
    <div class="row no-gutters">
      <div class="col-md-7">
        <img
          src="../assets/character-1.jpg"
          class="card-img"
          alt="star war character"
          height="370px"
        />
      </div>
      <div class="col-md-5">
        <div class="card-body">
          <span>
            <h5 class="card-title">Luke Skywalker</h5>
            <small class="text-muted">Son of Anakin</small>
          </span>
          <p
            class="card-text"
          >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PopularCharacters",
  props: [""]
};
</script>


<style scoped>
.card-img {
  border-radius: 0px !important;
  object-fit: cover;
}

.card {
  margin-top: 3.5rem;
  border-radius: 0px !important;
  padding: 0px !important;
  font-family: "Montserrat", sans-serif;
  background-color: rgb(243, 242, 242);
  border: none;
  margin-right: 15px;
}

.card-body {
  margin-top: 3rem;
}

.card-title {
  font-weight: bold;
  margin-bottom: 0px;
}
.card-text {
  margin-top: 2rem;
  font-size: 14px;
}

.text-muted {
  font-style: italic;
  font-size: 12px;
}
</style>