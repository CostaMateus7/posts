import styled from "styled-components";



export const TampleteMobileStyle = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  mix-blend-mode: normal;
  z-index: 10;
  article{
    position: absolute;
    height: 100vh;
    width: 270px;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
    opacity: 1;
    display: flex;
    background-color: #f2f4ff;
    flex-direction: column;
  }
  div{
    display: flex;
    min-height: 200px;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    margin: 30px;
    gap: 40px;
    background-color: #fff;
  }
  button{
    border-radius: 10px;
    color: #4661e6;
    padding: 10px 24px;
    font-family: Jost;
    font-style: normal;
    font-weight: 600;
    background-color: #f2f4ff;
    font-size: 13px;
    line-height: 19px;
    border: none;
    cursor: pointer;
  }
  button:hover{
    background-color: #CFD7FF;
  }
`