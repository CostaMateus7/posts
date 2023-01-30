import styled from "styled-components";

export const ContainerStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 150px 20px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    padding: 200px 0px 0px 0px;
  }
`;
