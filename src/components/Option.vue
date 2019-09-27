<template>
  <div class="input-group mb-3 col-md-2">
    <select class="custom-select" id="inputGroupSelect01">
      <option selected>Select...</option>
      <option value="Male">{{option1}}</option>
      <option value="Female">{{option2}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Option",
  props: ["option1", "option2"]
};
</script>


<style scoped>
.container {
  justify-content: flex-start;
}
</style>