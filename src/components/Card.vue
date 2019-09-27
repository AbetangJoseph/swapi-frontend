<template>
  <div class="card" style="width: 23rem;">
    <img src="../assets/starship-2.jpg" class="card-img-top" alt="..." style="height: 230px;" />
    <div class="card-body">
      <h5 class="card-title">Ghost</h5>
      <p
        class="card-text"
      >The Ghost is a modified VCX-100 light freighter, Manufactured by the Corellian Engineering Coperation.</p>
      <ButtonComponent bgcolor="rgb(214, 214, 214)" btnText="Read More ->" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "card",
  components: {
    ButtonComponent
  }
};
</script>

<style scoped>
.card {
  background-color: rgb(214, 214, 214);
  border-radius: 0px;
  border: none;
  margin-top: 3.5rem;
}
.card-title {
  font-family: "Montserrat", sans-serif;
}
.card-text {
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  color: rgb(124, 124, 124);
}

.card-body {
  background-color: rgb(243, 242, 242);
  margin-left: 8px;
  margin-bottom: 8px;
  margin-right: -8px;
  display: inline-block;
}
</style>