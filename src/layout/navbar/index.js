import React from "react";
import {
  Container,
  LogoContainer,
  SearchContainer,
  ActionsContainer,
} from "./styled";
import { ButtonPrimary } from "../../components/buttons";
import Search from "../../components/search";

const Navbar = () => {
  return (
    <Container>
      <LogoContainer></LogoContainer>

      <SearchContainer>
        <Search />
      </SearchContainer>

      <ActionsContainer>
        <ButtonPrimary text="Add" />
      </ActionsContainer>
    </Container>
  );
};

export default Navbar;
