import styled from "styled-components";

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
  border: 2px solid #ffcb05;
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

  &:hover {
    cursor: pointer;
    background-color: #3466af;
    color: white;
    transition: all 0.3s;
  }
`;
// ---------------------------------

export const Logo = styled.img`
  display: flex;
  width: 25%;
  max-height: 400px;
  margin: 1vw auto 1vw auto;
  box-sizing: border-box;
  /* position: fixed; */
`;

export const BackBox = styled.div`
  width: 50%;
  /* border: 1px solid black; */
  justify-items: center;
  padding: 2% 0 2% 0;
  background-color: white;
  position: relative;
`;
