import { Input } from "@components/Input";
import { render, screen } from "@testing-library/react-native";

describe("Component: Input", () => {
  it("should  be render without activity indicator if isLoading prop is undefined", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator"); // se usa o query pq o get retorna uma exception caso não encontre o elemento
    expect(activityIndicator).toBeNull();
  });

  it("should  be render with activity indicator if isLoading prop is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");
    expect(activityIndicator).toBeTruthy();
  });
});
