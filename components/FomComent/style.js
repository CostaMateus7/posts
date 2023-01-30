import styled from "styled-components";

export const FormComentStyle = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
  }
  textarea {
    width: 100%;
    background-color: #f7f8fd;
    border-radius: 5px;
    font-family: Jost;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3a4374;
    border: none;
    appearance: none;
    outline-color: #4661e6;
    min-height: 96px;
    max-height: 120px;
    padding: 16px 24px;
    margin-bottom: 16px;
  }
  section {
    padding: 24px 32px;
    width: 100%;
  }
  h1 {
    color: #3a4374;
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 15px;
  }
  span {
    color: #647196;
    font-size: 18px;
  }
  button {
    background-color: #ad1fea;
    border-radius: 10px;
    padding: 12px 24px;
    font-family: Jost;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: #f2f4fe;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.7;
  }
`;
