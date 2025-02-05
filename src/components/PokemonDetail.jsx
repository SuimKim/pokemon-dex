import React from "react";
import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../mockData";
import {
  ContentsBox,
  ImgBox,
  NameTag,
  NumBox,
  Info,
  BtnBox,
  Btn,
} from "../style/DetailStyledComponents";

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
        <NumBox>No.{String(id).padStart(3, "0")}</NumBox>
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
