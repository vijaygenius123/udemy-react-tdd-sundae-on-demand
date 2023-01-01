import { Col } from "react-bootstrap";

export const ScoopOption = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <img src={`http://localhost:8080/${imagePath}`} alt={`${name} scoop`} />
    </Col>
  );
};

export default ScoopOption;
