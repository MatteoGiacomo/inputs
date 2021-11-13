import Test from "@/views/Test.vue";
import { render, screen } from "@testing-library/vue";
import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { getNewStore } from "@/store";
import userEvent from "@testing-library/user-event";

describe("Test", () => {
  test("renders button and counter", async () => {
    render(Test, {
      mocks: {
        $store: {
          state: {
            counter: 0,
          },
        },
      },
    });

    const incrementButton = await screen.findByRole("button", {
      name: "Increse me",
    });

    expect(incrementButton).not.toBeNull();
  });

  test("increment counter", async () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = getNewStore();

    render(Test, {
      localVue,
      store,
    });

    const incrementButton = await screen.findByRole("button", {
      name: "Increse me",
    });

    const counterBefore = await screen.findByTestId("counter");
    expect(counterBefore.innerHTML).toBe("0");

    userEvent.click(incrementButton);

    const counterAfter = await screen.findByTestId("counter");
    expect(counterAfter.innerHTML).toBe("1");
  });
});
