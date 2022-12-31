import { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

export const SummaryForm = () => {
  const [agree, setAgree] = useState(false);
  const toggleAgree = () => {
    setAgree((prev) => !prev);
  };
  const popover = (
    <Popover>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );
  const checkboxLabel = (
    <span>
      I agree to{" "}
      <OverlayTrigger overlay={popover} placement={"right"}>
        <span className={"link-primary"}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId={"terms-and-conditions"}>
        <Form.Check
          type={"checkbox"}
          checked={agree}
          onChange={toggleAgree}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant={"primary"} disabled={!agree}>
        Confirm order
      </Button>
    </Form>
  );
};
