import React from "react";
import { Input } from "antd";
import { Container } from "./styled";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  return (
    <Container>
      <Input placeholder="Search ToDo" prefix={<SearchOutlined />} />
    </Container>
  );
};

export default Search;
