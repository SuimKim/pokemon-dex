import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;

export const Select = styled.select`
  width: 10%;
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
  width: 40%;
  display: flex;
  position: relative;
  overflow: hidden;
  border: 3px solid #3466af;
  border-radius: 5vw;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

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

  &:focus {
    outline: none;
  }
`;
