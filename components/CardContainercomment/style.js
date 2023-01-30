import styled from "styled-components";

export const Card = styled.section`
  padding: 28px 32px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap-reverse;
  }
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 0%;
    margin-bottom: 10px;
  }
  article {
    color: #647196;
    font-weight: 400;
    font-size: 13px;
    margin: 10px 0px;
    line-height: 23px;
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
  div {
    font-family: Jost;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3a4374;
    margin: 0px 0px 0px 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (max-width: 600px) {
      position: absolute;
      right: 37px;
      bottom: 37px;
    }
  }
  button {
    font-size: 16px;
    background-color: transparent;
    border: none;
    color: #3a4374;
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
  section {
    margin: 0px 40px 0px 0px;
    padding: 14px 14px;
    cursor: pointer;
    background-color: #f2f4fe;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    letter-spacing: -0.180556px;
    gap: 10px;
    align-items: center;
    max-width: 80px;
    max-height: 80px;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #3a4374;
    box-sizing: border-box;
    @media (max-width: 600px) {
      flex-direction: row;
    }
  }
  section:hover {
    background-color: #cfd7ff;
  }
  h3 {
    color: #3a4374;
    font-size: 18px;
    font-weight: bolder;
    margin: 0px 0px 4px;
    @media (max-width: 1200px) {
      font-size: 16px;
      margin: 0px;
    }
  }
  p {
    color: #4661e6;
    background-color: #f2f4ff;
    font-size: 13px;
    font-weight: bold;
    padding: 5px 16px;
    display: inline-block;
    border-radius: 10px;
    font-weight: 600;
    line-height: 19px;
    font-style: normal;
    max-width: 120px;
    text-align: center;
  }
  span {
    color: #3a4374;
    font-weight: bolder;
    font-size: 13px;
  }
`;
