import styled from "styled-components";

export const Background = styled.div`
  width: 80%;
  display: flex;
  position: relative;
  margin: 4% 0 1% 0;
  left: 2vw;
`;

export const Select = styled.select`
  width: 12%;
  height: 4.37vw;
  border: 3px solid #3466af;
  border-right: none;
  font-size: 1.2vw;
  padding: 1vw;
  border-radius: 5vw;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
export const InputBox = styled.div`
  width: 50%;
  display: flex;
  height: 4.37vw;
  position: relative;
  overflow: hidden;
  border: 3px solid #3466af;
  border-radius: 5vw;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-sizing: border-box;

  img {
    width: 3vw;
    height: 3vw;
  }
`;
export const BtnBox = styled.div`
  position: absolute;
  right: 1.5vw;
  top: 0.5vw;

  &:hover {
    cursor: pointer;
  }
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 85%;
  height: 4vw;
  border: none;
  border-right: 3px solid #3466af;
  font-size: 1.2vw;
  padding: 1vw;
  /* z-index: 3; */
  &:focus {
    outline: none;
  }
`;

export const DropDownBox = styled.div`
  position: absolute;
  width: 41.8%;
  border: 3px solid #3466af;
  border-top: 2px solid #b8c4d6;
  background-color: white;
  /* height: 30px; */
  top: 4.2vw;
  left: 12%;
  z-index: 2;
  text-align: left;
  display: none;
`;

export const DropDownList = styled.p`
  position: relative;
  padding: 1vw;
  /* border-top: 1px solid black; */
`;
