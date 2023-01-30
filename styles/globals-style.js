import { createGlobalStyle } from "styled-components";

export const GloboalStyles = createGlobalStyle`
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

body{
  background-color: #F7F8FD;
  font-family: 'Jost', sans-serif;
  padding: 0px 70px;
  overflow-y: scroll;
  @media (max-width: 1000px){
      padding: 0px 10px;
    }
  

}
`;
