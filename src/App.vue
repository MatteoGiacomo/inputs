<template>
  <div id="app">
    <Test />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Test from "@/views/Test.vue";

export default Vue.extend({
  name: "App",
  components: {
    Test,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss" module>
.mainNavLink,
.mainNavLink:visited {
  color: #2c3e50;
}

.mainNavLink:first-child {
  margin-right: 5px;
}
</style>
