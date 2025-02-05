import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Btn,
  BtnBox,
  CardBox,
  CoverBox,
  ImgBox,
  NameTag,
  NumBox,
} from "../style/CardStyledComponents";

const PokemonCard = ({ item, handlerBtn, label }) => {
  const { id, img_url, korean_name } = item;

  const navigate = useNavigate();

  return (
    <CardBox
      onClick={(e) => {
        e.target.id === "card-box" && navigate(`/pokemon-detail?id=${id}`);
      }}
    >
      <NumBox>{String(id).padStart(3, "0")}</NumBox>
      <NameTag>{korean_name}</NameTag>
      <ImgBox src={img_url} alt="" />
      <BtnBox>
        <Btn onClick={() => handlerBtn(id)}>{label}</Btn>
        <Btn onClick={() => handlerBtn(id)}>{label}</Btn>
      </BtnBox>
      <CoverBox id="card-box" />
    </CardBox>
  );
};

export default PokemonCard;
