import styled from "styled-components";

export const ContainerStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 100px 230px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    padding: 100px 10px 10px 10px;
  }
`;
export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: #647196;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    font-weight: bolder;
  }
  button {
    background-color: #4661e6;
    border-radius: 10px;
    padding: 12px 24px;
    font-family: Jost;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #f2f4fe;
    border: none;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.7;
  }
`;
