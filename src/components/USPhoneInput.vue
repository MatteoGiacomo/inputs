<template>
  <input
    data-testid="phone-input"
    type="phone"
    name="us-phone-input"
    :value="showedInputValue"
    placeholder="(555) 555-5555"
    @input="onInputChange"
  />
</template>

<script lang="ts">
import Vue from "vue";
const ONLY_DIGITS_REGEXP = new RegExp(/\d/);
// chars used to composed (xxx) xxx-xxxx format
const US_PHONE_CHARS_MAP: Record<string, string> = {
  "0": "(",
  "3": ") ",
  "6": "-",
};

export default Vue.extend({
  name: "USPhoneInput",
  data() {
    return {
      showedInputValue: "",
    };
  },
  methods: {
    onInputChange(event: InputEvent) {
      const target = event.target as HTMLInputElement;

      if (target) {
        let currentTypedValue = target.value;

        // limit max lenght of the value
        if (currentTypedValue.length > 14) {
          currentTypedValue = currentTypedValue.slice(0, 14);
        }

        const normalizedChars: string[] = currentTypedValue
          .split("")
          .filter((char: string): boolean => ONLY_DIGITS_REGEXP.test(char));

        const foramttedValue = this.getUSPhoneFormat(normalizedChars);

        // reset inputValue to trigger reactivity
        this.showedInputValue = " ";
        this.showedInputValue = foramttedValue;
      }
    },
    getUSPhoneFormat(digits: string[]): string {
      const result = [];
      let idx = 0;

      while (idx < digits.length) {
        if (US_PHONE_CHARS_MAP[String(idx)]) {
          result.push(US_PHONE_CHARS_MAP[String(idx)]);
        }
        result.push(digits[idx]);
        idx += 1;
      }

      return result.join("");
    },
  },
});
</script>

<style></style>
