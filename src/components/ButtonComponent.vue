<template>
  <a
    href="#"
    id="btn"
    class="btn"
    :style="style"
    @mouseover="mouseOver()"
    @mouseleave="mouseLeave()"
  >
    {{btnText}}
    <img :src="icon2" />
  </a>
</template>


<script>
export default {
  name: "ButtonComponent",
  props: {
    bgcolor: {
      type: String,
      default: "#fff"
    },
    width: {
      type: String,
      default: "150"
    },
    borderRadius: {
      type: String,
      default: "0"
    },
    btnText: {
      type: String,
      default: "View More"
    },
    border: {
      type: String,
      default: "none"
    },
    fontSize: {
      type: String,
      default: "12"
    },
    icon: {
      type: String
    }
  },
  computed: {
    style() {
      return {
        "background-color": this.bgColorHover,
        width: `${this.width}px`,
        borderRadius: `${this.borderRadius}px`,
        border: this.border,
        fontSize: `${this.fontSize}px`
      };
    }
  },
  data() {
    return {
      bgColorHover: this.bgcolor,
      icon2: this.icon
    };
  },
  methods: {
    mouseOver() {
      this.bgColorHover = "black";
      this.icon2 =
        this.icon && "/assets/images/arrow-pointing-to-right-white.svg";
    },
    mouseLeave() {
      this.bgColorHover = this.bgcolor;
      this.icon2 = this.icon;
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 0px;
  float: right;
  height: 45px;
  padding: 12px;
  width: 150px;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
}

#btn:hover {
  background-color: black;
  color: white;
  fill: white;
}
</style>