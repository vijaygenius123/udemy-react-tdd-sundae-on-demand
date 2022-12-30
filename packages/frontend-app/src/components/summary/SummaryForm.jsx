import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SummaryForm = () => {
  const [agree, setAgree] = useState(false);
  const toggleAgree = () => {
    setAgree((prev) => !prev);
  };
  const checkboxLabel = <span>I agree to Terms and Conditions</span>;
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
