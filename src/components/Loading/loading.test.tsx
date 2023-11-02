import React from "react";
import { render } from "@testing-library/react-native";
import { Loading } from ".";

describe("Loading component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Loading />);
    const loadingComponent = getByTestId("loading-component");
    expect(loadingComponent).toBeTruthy();
  });
});
