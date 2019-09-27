<template>
  <div class="card" style="width: 23.5rem;">
    <h4 id="cardTitle">{{cardTitle}}</h4>
    <img src="../assets/planet-1.jpg" class="card-img-top" alt="A Planet" style />
  </div>
</template>

<script>
export default {
  name: "planetCard",
  props: ["cardTitle"]
};
</script>

<style scoped>
.card {
  background-color: rgb(214, 214, 214);
  border-radius: 0px;
  border: none;
  margin-top: 3.5rem;
  position: relative;
  text-align: center;
  color: white;
}
.card-title {
  font-family: "Montserrat", sans-serif;
}
.card-text {
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  color: rgb(124, 124, 124);
}

#cardTitle {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Montserrat", sans-serif;
}
</style>