import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into the input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("should set the input to empty when the AddButton is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    // changing the value of the input
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    fireEvent.change(inputElement, {
      target: {
        value: "Go Big or go Home",
      },
    });
    const addButtonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(addButtonElement);
    expect(inputElement.value).toBe("");
  });
});
