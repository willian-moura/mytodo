import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

  #root {
    font-family: "Roboto", sans-serif;
  }

  button{
    border: none;
    font-family: "Roboto", sans-serif;
  }

  a,
  span {
    font-family: "Roboto", sans-serif;
  }

  header{
  }
`;

export const Container = styled.div``;
