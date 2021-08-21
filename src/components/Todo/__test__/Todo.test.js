import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((element) => {
    fireEvent.change(inputElement, { target: { value: element } });
    fireEvent.click(buttonElement);
  });
};

describe("todo", () => {
  it("should render the Todo after adding", () => {
    render(<MockedTodo />);
    addTask(["Go talking to the moon"]);
    const addedTodoDivElement = screen.getByText("Go talking to the moon");
    expect(addedTodoDivElement).toBeInTheDocument();
  });

  it("should increase the number of todo when multiple todo are added", () => {
    render(<MockedTodo />);
    const tasks = ["Go to the moon", "Go to Mars"];
    addTask(tasks);
    const addedTodoDivElement = screen.getAllByTestId("task-container");
    expect(addedTodoDivElement.length).toBe(2);
  });

  it("task should not have completed class when initially rendered", () => {
    render(<MockedTodo />);
    const tasks = ["Go to the moon"];
    addTask(tasks);
    const addedTodoDivElement = screen.getByText("Go to the moon");
    expect(addedTodoDivElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", () => {
    render(<MockedTodo />);
    const tasks = ["Go to the moon"];
    addTask(tasks);
    const addedTodoDivElement = screen.getByText("Go to the moon");
    fireEvent.click(addedTodoDivElement);
    expect(addedTodoDivElement).toHaveClass("todo-item-active");
  });
});
