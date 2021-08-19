import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={3} />);
    const paragraphElement = screen.getByText("3 tasks left");
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" singular when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText("1 task left");
    expect(paragraphElement).toBeInTheDocument();
  });
});

// it('should render "task" singular when the number of incomplete tasks is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText("1 task left");
//   expect(paragraphElement.textContent).toBe("1 task left");
// });
