import styled from "styled-components";

export const HeaderMobile = styled.header`
  width: 100%;
  height: 80px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTUgMTM3Ij48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDI1NXYxMzdIMHoiLz48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1NSIgaGVpZ2h0PSIxMzciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjU1djEzN0gweiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48ZyBvcGFjaXR5PSIuNzY1IiBmaWx0ZXI9InVybCgjYykiPjxjaXJjbGUgY3g9Ii0uNSIgY3k9Ii00MC41IiByPSI5NiIgZmlsbD0iIzdBRDhGQiIvPjwvZz48ZyBmaWx0ZXI9InVybCgjZCkiPjxjaXJjbGUgY3g9IjMwNC41IiBjeT0iMTM3LjUiIHI9Ijk2IiBmaWxsPSIjRkJCNTdBIi8+PC9nPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJjIiB4PSItMTg2LjIwMyIgeT0iLTIyNi4yMDMiIHdpZHRoPSIzNzEuNDA3IiBoZWlnaHQ9IjM3MS40MDciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ0Ljg1MiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzA6MjMzMyIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImQiIHg9IjExOC43OTciIHk9Ii00OC4yMDMiIHdpZHRoPSIzNzEuNDA3IiBoZWlnaHQ9IjM3MS40MDciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ0Ljg1MiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzA6MjMzMyIvPjwvZmlsdGVyPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgxNDYuODIzIDEzNC41OTIgMzIuMzQ4KSBzY2FsZSgzMjIuNjY2IDMwMS4yODgpIj48c3RvcCBzdG9wLWNvbG9yPSIjRTg0RDcwIi8+PHN0b3Agb2Zmc2V0PSIuNTMxIiBzdG9wLWNvbG9yPSIjQTMzN0Y2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjhBN0VEIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PC9zdmc+);
  display: flex;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  outline: none;
  padding: 16px 24px;
  color: #fff;
  font-family: Jost;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.1875px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0;
  display: none;
  h1 {
    font-size: 20px;
    font-weight: bolder;
  }
  p {
    font-size: 16px;
  }
  svg {
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    display: flex;
  }
`;
