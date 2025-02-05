import styled from "styled-components";

export const BtnDex = styled.button`
  /* position: absolute; */
  height: 5vw;
  width: 30%;
  font-size: 2vw;
  background-color: white;
  border: 5px solid #3466af;
  display: block;
  margin: 2.5vw auto 1.5vw auto;
  &:hover {
    cursor: pointer;
    border: 5px solid #ffcb05;
  }
`;

export const Logo = styled.img`
  display: flex;
  width: 60vw;
  max-height: 400px;
  margin: 2vw auto 0 auto;
  box-sizing: border-box;
`;

export const Ball = styled.img`
  width: 60vw;
  max-width: 1000px;
  display: inline-block;
`;
