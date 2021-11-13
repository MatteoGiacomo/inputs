<template>
  <div>
    <h1>US phone input</h1>
    <USPhoneInput />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import USPhoneInput from "@/components/USPhoneInput.vue";

export default Vue.extend({
  name: "Test",
  components: {
    USPhoneInput,
  },
  computed: {},
  methods: {},
});
</script>

<style scoped lang="scss"></style>
