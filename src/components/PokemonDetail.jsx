import React from "react";
import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../mockData";
import styled from "styled-components";

const ContentsBox = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  /* display: flex; */
`;
const NumBox = styled.div`
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
const NameTag = styled.p`
  font-size: 3vw;
  font-weight: bold;
`;
const Info = styled.p`
  font-size: 1.5vw;
  margin: 2%;
`;
const ImgBox = styled.img`
  border: 2px solid black;
  display: inline-block;
  width: 40%;
`;
const BtnBox = styled.div`
  /* border: 1px solid black; */
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  margin-top: 10px;
  width: 100%;
`;
const Btn = styled.button`
  display: inline-block;
  width: 30%;
  height: 4vw;
  background-color: white;
  border: 2px solid #3466af;
  border-radius: 10vw;
  z-index: 1;
  margin: 1vw 2vw 0 2vw;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: #ffcb05;
    transition: all 0.3s;
  }
`;
const PokemonDetail = ({ id }) => {
  const list = MOCK_DATA;
  const navigate = useNavigate();

  const arr = list.find((a) => {
    return a.id === Number(id);
  });
  const { korean_name, img_url, description } = arr;

  return (
    <>
      <ContentsBox>
        <NumBox>{String(id).padStart(3, "0")}</NumBox>
        <NameTag>{korean_name}</NameTag>
        <ImgBox src={img_url} alt="" />
        <Info>{description}</Info>
        <BtnBox>
          <Btn
            onClick={() => {
              navigate("/dex");
            }}
          >
            뒤로가기
          </Btn>
          <Btn
            onClick={() => {
              navigate("/dex");
            }}
          >
            뒤로가기
          </Btn>
        </BtnBox>
      </ContentsBox>
    </>
  );
};

export default PokemonDetail;
