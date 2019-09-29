<template>
  <div class="input-group mb-3 col-md-2">
    <select class="custom-select" id="inputGroupSelect01" @change="onChange($event)">
      <option :selected="isSelected">Select...</option>
      <option
        :value="option.toLowerCase()"
        v-for="(option, index) in options"
        :key="index"
      >{{option}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Option",
  props: ["options", "isSelected", "onChange"]
};
</script>


<style scoped>
.container {
  justify-content: flex-start;
}
</style>