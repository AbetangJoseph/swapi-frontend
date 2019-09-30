<template>
  <div class="card" style="width: 23rem;">
    <img
      :src="`/assets/images/starship-${Math.ceil(Math.random() * 6)}.jpg`"
      class="card-img-top"
      alt="starship image"
      style="height: 230px;"
    />
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text">{{model}}</p>

      <p class="card-text">
        <b>{{title}}</b>
        {{manufacturer}}
      </p>

      <router-link :to="{ name: 'starship', params: { id: url.match(/\d+/)[0]}}">
        <ButtonComponent
          bgcolor="rgb(214, 214, 214)"
          btnText="Read More"
          icon="/assets/images/arrow-pointing-to-right.svg"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "card",
  props: ["name", "model", "manufacturer", "title", "url"],
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