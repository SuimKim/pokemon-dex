import styled from "styled-components";

export const Logo = styled.img`
  display: flex;
  width: 25%;
  max-height: 400px;
  margin: 1vw auto 1vw auto;
  box-sizing: border-box;

  @media only screen and (max-width: 480px) {
    width: 50%;
  }
`;

export const BackBox = styled.div`
  width: 50%;
  justify-items: center;
  padding: 2% 0 2% 0;
  background-color: white;
  position: relative;

  @media only screen and (max-width: 480px) {
    margin: 0 auto 0 auto;
    width: 90%;
  }
`;

// ---------------------------------
export const ContentsBox = styled.div`
  width: 100%;
`;
export const NumBox = styled.div`
  padding-top: 0.8vw;
  background-color: #ffbd6c;
  border-radius: 10vw;
  width: 15%;
  height: 3vw;
  font-size: 1.5vw;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 1vw;

  @media only screen and (max-width: 480px) {
    margin-bottom: 2vw;
    width: 11%;
    height: 4vw;
    font-size: 2vw;
    padding-top: 1.3vw;
  }
`;
export const NameTag = styled.p`
  font-size: 3vw;
  font-weight: bold;
`;
export const Info = styled.p`
  font-size: 1.5vw;
  margin: 2%;
`;
export const ImgBox = styled.img`
  border: 1px solid #ffcb05;
  display: inline-block;
  width: 40%;
`;
export const BtnBox = styled.div`
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px auto 0 auto;
  width: 80%;
`;
export const Btn = styled.button`
  display: inline-block;
  width: 30%;
  height: 4vw;
  background-color: #ffcb05;
  border: 2px solid #3466af;
  border-radius: 10vw;
  z-index: 1;
  margin: 1vw 2vw 0 2vw;
  box-sizing: border-box;

  @media only screen and (max-width: 480px) {
    border: 0.4vw solid #3466af;
    height: 7vw;
    color: black;
    font-size: 2vw;
  }

  &:hover {
    cursor: pointer;
    background-color: #3466af;
    color: white;
    transition: all 0.3s;
  }
`;
