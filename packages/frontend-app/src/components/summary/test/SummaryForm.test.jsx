import { screen, render, fireEvent } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";

describe("Summary Form", function () {
  it("should have initial state as unchecked checkbox and disabled button", function () {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: /confirm order/i });
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable button when checkbox is checked", function () {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: /confirm order/i });
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
