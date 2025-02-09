import styled from "styled-components";

export const CoverBox = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;

export const CardBox = styled.div`
  border-radius: 2vw;
  position: relative;
  /* margin: 10px; */
  background-color: white;
  z-index: 1;
  justify-items: center;
  justify-content: center;
  box-shadow: 0 1vw 1vw #bcbcbcaf;
  /* min-height: 240px; */
  height: 16vw;
  width: 12vw;
  &:hover {
    box-shadow: 0px 0.5vw 1.5vw #989898ad;
    transition: all 0.3s;
    transform: translateY(-1vw);
  }
`;

export const NumBox = styled.div`
  position: absolute;
  background-color: #ffbd6c;
  padding: 0.6vw 0.5vw 0.4vw 0.5vw;
  border-radius: 1vw;
  width: 2vw;
  font-size: 0.8vw;
  top: 1vw;
  left: 1vw;
`;
export const NameTag = styled.p`
  position: absolute;
  top: 1.4vw;
  left: 4.5vw;
  font-size: 1.2vw;
  font-weight: bold;
`;
export const ImgBox = styled.img`
  position: relative;
  display: flex;
  top: 3.2vw;
  width: 75%;
  border: 0.1vw solid #ffcb05;
`;
export const BtnBox = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  justify-content: right;
  top: 3.5vw;
`;
export const Btn = styled.button`
  position: relative;
  width: 40%;
  height: 2.2vw;
  background-color: #ffcb05;
  border: 0.13vw solid #3466af;
  border-radius: 2vw;
  margin-right: 1vw;
  z-index: 1;
  font-size: 0.8vw;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: #3466af;
    color: white;
    transition: all 0.3s;
  }
`;
