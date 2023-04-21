import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

describe("Greetings Component", () => {
  test("Check wheather 'welcome' text present? :", () => {
    //   Arrange
    render(<Greetings />);

    //   Assert
    const textElement = screen.getByText("Welcome");
    expect(textElement).toBeInTheDocument();
  });

  test("Check wheather the greetings changed and change text button works:", () => {
    //   Arrange
    render(<Greetings />);

    // Act
    const changeButton = screen.getByRole("button");
    userEvent.click(changeButton);

    //   Assert
    const textElement = screen.getByText("Hello There");
    expect(textElement).toBeInTheDocument();
  });

  test("Check wheather 'Wlecome' is changed to 'Hello There'", () => {
    render(<Greetings />);
    // Act
    const changeButton = screen.getByRole("button");
    userEvent.click(changeButton);

    //   Assert
    const textElement = screen.queryByText("welcome");
    expect(textElement).not.toBeInTheDocument();
  });
});
