import styled from "styled-components";

export const NavbarStyle = styled.header`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 1200px){
      width: 100%;
      margin-bottom: 0;
      flex-direction: row;
      gap: 10px;
    }
  @media (max-width: 1000px){
    display: none;
    }
  div{
    background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTUgMTM3Ij48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDI1NXYxMzdIMHoiLz48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1NSIgaGVpZ2h0PSIxMzciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjU1djEzN0gweiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48ZyBvcGFjaXR5PSIuNzY1IiBmaWx0ZXI9InVybCgjYykiPjxjaXJjbGUgY3g9Ii0uNSIgY3k9Ii00MC41IiByPSI5NiIgZmlsbD0iIzdBRDhGQiIvPjwvZz48ZyBmaWx0ZXI9InVybCgjZCkiPjxjaXJjbGUgY3g9IjMwNC41IiBjeT0iMTM3LjUiIHI9Ijk2IiBmaWxsPSIjRkJCNTdBIi8+PC9nPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJjIiB4PSItMTg2LjIwMyIgeT0iLTIyNi4yMDMiIHdpZHRoPSIzNzEuNDA3IiBoZWlnaHQ9IjM3MS40MDciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ0Ljg1MiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzA6MjMzMyIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImQiIHg9IjExOC43OTciIHk9Ii00OC4yMDMiIHdpZHRoPSIzNzEuNDA3IiBoZWlnaHQ9IjM3MS40MDciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ0Ljg1MiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzA6MjMzMyIvPjwvZmlsdGVyPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgxNDYuODIzIDEzNC41OTIgMzIuMzQ4KSBzY2FsZSgzMjIuNjY2IDMwMS4yODgpIj48c3RvcCBzdG9wLWNvbG9yPSIjRTg0RDcwIi8+PHN0b3Agb2Zmc2V0PSIuNTMxIiBzdG9wLWNvbG9yPSIjQTMzN0Y2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjhBN0VEIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PC9zdmc+);
    width: 90%;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 24px;
    font-family: 'Jost';
    border-radius: 10px;
    background-size: cover;
    h1{
      font-size: 30px;
      color: #fff;
      font-weight: bolder;
      display: block;
    }
    p{
      font-size: 20px;
      color: #fff;
      display: block;
    }
    @media (max-width: 1023px){
      margin-bottom: 0;
      flex-direction: row;
      overflow: hidden;
      height: 200px;
      padding: 10px 10px;
      section, article{
        height: 200px;
      }
    }
  }
  section{
    width: 90%;
    height: 170px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px 24px 24px 24px;
    background: #fff;
    border-radius: 10px;
    button{
      border-radius: 10px;
      color: #4661e6;
      padding: 5px 16px;
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
  }
  article{
    width: 90%;
    min-height: 170px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 10px;
    flex-wrap: nowrap;
    padding: 15px;
    @media (max-width: 1200px){
      padding: 15px;
    }
  }
  span{
      color: #647196;
      font-weight: bolder;
      margin-left: 60px;
    }
  
  
  ul{
    margin-left: 25px;
    font-size: 16px;
    color: #647196;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h3{
    color: #3a4374;
    font-size: 22px;
  }

`