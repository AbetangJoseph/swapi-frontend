<template>
  <div>
    <h3 id="popular-starships">{{title}}</h3>
    <hr />
  </div>
</template>

<script>
export default {
  name: "section-title",
  props: ["title"]
};
</script>

<style  scoped>
#popular-starships {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: rgb(73, 73, 73);
  margin-top: 60px;
}

hr {
  background: rgb(73, 73, 73);
  height: 5px;
  width: 6.5rem;
}
</style>