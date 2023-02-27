import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  margin : 0;
  padding : 0
}
body {
  background-color:  '#fff';
}
a{
  color : inherit;
  text-decoration: none;
cursor: pointer;
}
input , button {
  border : none;
  background-color: transparent;
  outline: none;
}

:root{
  --black : #000;
  --white : #fff;
}
`;

export default GlobalStyle;
