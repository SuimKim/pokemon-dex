import styled from "styled-components";

export const CoverBox = styled.div`
  /* background-color: #00000053; */
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;

export const CardBox = styled.div`
  border-radius: 20px;
  position: relative;
  margin: 10px;
  background-color: white;
  z-index: 1;
  justify-items: center;
  box-shadow: 0px 10px 20px #bcbcbcaf;
  height: 240px;
  &:hover {
    box-shadow: 0px 10px 30px #989898ad;
    transition: all 0.3s;
    transform: translateY(-10px);
  }
`;

export const NumBox = styled.div`
  position: absolute;
  background-color: #ffbd6c;
  padding: 9px 10px 5px 10px;
  border-radius: 20px;
  width: 25px;
  font-size: 1em;
  top: 15px;
  left: 15px;
`;
export const NameTag = styled.p`
  position: absolute;
  top: 22px;
  left: 75px;
  font-size: 1.2em;
  font-weight: bold;
`;
export const ImgBox = styled.img`
  position: relative;
  display: flex;
  top: 30px;
  width: 100%;
`;
export const BtnBox = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  /* margin-top: px; */
  width: 100%;
  justify-content: right;
`;
export const Btn = styled.button`
  position: relative;
  width: 50%;
  height: 35px;
  background-color: #ffcb05;
  border: 2px solid #3466af;
  border-radius: 20px;
  z-index: 1;
  margin: 10px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: #3466af;
    color: white;
    transition: all 0.3s;
  }
`;
