<template>
  <nav>
    <h3
      style="margin-right:20px; color:#ddd"
    >{{meta.current}} - {{ Math.ceil(meta.count / 10)}} of {{meta.count}}</h3>
    <ul class="pagination pagination-lg">
      <li :class="meta.previous === null ? disable:enable " @click="navigate(meta.previous)">
        <a class="page-link" id="previous">
          <img :src="meta.previous === null ? previousSignBlured : previousSign" />
        </a>
      </li>
      <li :class="meta.next === null ? disable:enable " @click="navigate(meta.next)">
        <a class="page-link" id="next">
          <img :src="meta.next === null ? nextSignBlured : nextSign" />
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "pagination",
  props: ["navigate", "meta"],
  data() {
    return {
      previousSign: "/assets/images/lessthan.svg",
      previousSignBlured: "/assets/images/lessthan-blured.svg",
      nextSign: "/assets/images/greaterthan.svg",
      nextSignBlured: "/assets/images/greaterthan-blured.svg",
      disable: "page-item disabled",
      enable: "page-item"
    };
  }
};
</script>

<style scoped>
nav {
  justify-content: center;
  display: flex;
  margin-top: 5rem;
  margin-bottom: 5rem;
  align-items: center;
}

li {
  cursor: pointer;
}
</style>