import styled from "styled-components";

export const ContainerDetailsStyle = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  position: relative;

  section {
    width: 50px;
    display: flex;

    span {
      background-color: violet;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 5px;
      top: 0;
    }
  }
  p {
    color: #647196;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    margin-top: 20px;
  }
  article {
    display: flex;
    padding: 25px 18px;
    margin-bottom: 30px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #4661e6;
    font-family: Jost;
    font-style: normal;
  }
  h2 {
    color: #3a4374;
    font-size: 16px;
  }
  h3 {
    color: #647196;
    font-size: 13px;
  }
  h1 {
    color: #3a4374;
    font-size: 18px;
    padding: 20px;
  }
`;
