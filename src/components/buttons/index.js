import React from "react";
import { Button } from "antd";
import { Container } from "./styled";

export const ButtonPrimary = ({ text, onClick }) => {
  return (
    <Container>
      <Button
        type="primary"
        style={{
          backgroundColor: "#8AA8E5",
          borderRadius: 5,
          border: "none",
          height: "30px",
          width: "80px",
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </Container>
  );
};
