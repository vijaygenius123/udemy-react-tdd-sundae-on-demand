import { screen, render } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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

  it("should enable button when checkbox is checked", async function () {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: /confirm order/i });
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    await user.click(checkbox);
    expect(button).toBeEnabled();
    await user.click(checkbox);
    expect(button).toBeDisabled();
  });

  it("should display popover on hover", async function () {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const noPopOver = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(noPopOver).not.toBeInTheDocument();
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popOver = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popOver).toBeInTheDocument();
    await user.unhover(termsAndConditions);
    expect(popOver).not.toBeInTheDocument();
  });
});
