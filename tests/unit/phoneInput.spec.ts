import USPhoeInput from "@/components/USPhoeInput.vue";
import { render, screen } from "@testing-library/vue";

describe("USPhoneInput", () => {
  test("render an input field", async () => {
    render(USPhoeInput);

    const phoneInput = await screen.findByTestId("phone-input");

    expect(phoneInput).not.toBeNull();
  });

  test("doesn't render ", async () => {
    render(USPhoeInput);

    const phoneInput = await screen.findByTestId("phone-input");

    expect(phoneInput).not.toBeNull();
  });
});
