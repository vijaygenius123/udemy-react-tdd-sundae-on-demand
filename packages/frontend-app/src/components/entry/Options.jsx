import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/${optionType}`).then((resp) => {
      setItems(resp.data);
    });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  return (
    <Row>
      {items &&
        items.map((item) => (
          <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
          />
        ))}
    </Row>
  );
};

export default Options;
