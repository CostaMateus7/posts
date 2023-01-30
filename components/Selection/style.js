import styled from "styled-components";


export const CardSelectStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px 14px 20px 14px;
  background-color: #373f68;
  border-radius: 10px;
  margin-bottom: 24px;
  @media (max-width: 1000px){
      position: absolute;
      top: 80px;
      width: 100%;
      left: 0;
      right: 0;
      margin-right: 0;
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 25px;
      border-radius: 0;
      padding: 20px;
    }
  div{
    font-family: Jost;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -.25px;
    color: #fff;
    display: flex;
    align-items: center;
    @media (max-width: 1000px){
      display: none;
    }
  }
  button{
    background-color: #ad1fea;
    border-radius: 10px;
    padding: 12px 24px;
    font-family: Jost;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    color: #f2f4fe;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 600px){
    padding: 3px 5px;
    font-size: 13px;
}
  }
  section{
    display: flex;
    align-items: center;
    font-family: Jost;
    font-style: normal;
    font-size: 13px;
    line-height: 20px;
    color: #f2f4fe;
    mix-blend-mode: normal;
    letter-spacing: 1px;
    opacity: .75;
    margin: 0;
    cursor: pointer;
    @media (max-width: 600px){
    font-size: 13px;
}
  }
    option{
    position: relative;
    padding: 12px 24px;
    border-bottom: 1px solid rgba(58,67,116,.15);
    font-family: Jost;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    cursor: pointer;
  }
  select {
   appearance:none;
   outline:0;
   box-shadow:none;
   border:none!important;
   background-color: #373f68;
   flex: 1;
   padding: 0 .5em;
   color: #C3C7D8;
   cursor:pointer;
   font-size: 1em;
   font-weight: bolder;
}
svg{
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px){
     display: none;
    }
}
`