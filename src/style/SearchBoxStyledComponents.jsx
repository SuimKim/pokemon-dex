import styled from "styled-components";

export const Background = styled.div`
  width: 80%;
  display: flex;
  margin: 4% 0 1% 0;
  position: relative;

  @media only screen and (max-width: 480px) {
    margin: 4% auto 1% auto;
  }
`;

export const Select = styled.select`
  width: 12%;
  height: 4.37vw;
  border: 0.2vw solid #3466af;
  border-right: none;
  font-size: 1.2vw;
  padding: 1vw;
  border-radius: 5vw;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;
  left: 2vw;
  background-color: white;

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
  border: 0.2vw solid #3466af;
  border-radius: 5vw;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-sizing: border-box;
  left: 2vw;

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
  border-right: 0.2vw solid #3466af;
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
  border: 0.1vw solid #3466af;
  background-color: white;
  top: 4.15vw;
  left: 15%;
  z-index: 2;
  text-align: left;
  font-size: 1vw;
`;

export const DropDownList = styled.p`
  position: relative;
  padding: 1vw;
  &:hover {
    cursor: pointer;
    background-color: #f7f9fd;
  }
`;
