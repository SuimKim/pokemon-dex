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
  const navigate = useNavigate();

  const { id, img_url, korean_name } = item;

  const handleCardClick = (e) => {
    sessionStorage.setItem("scroll", window.scrollY); // 카드를 클릭했을 당시 스크롤을 세션에 저장
    e.target.id === "card-box" && navigate(`/pokemon-detail?id=${id}`); // 디테일 페이지로 이동
  };

  return (
    <CardBox onClick={handleCardClick}>
      <NumBox>{String(id).padStart(3, "0")}</NumBox>
      <NameTag>{korean_name}</NameTag>
      <ImgBox src={img_url} alt="" />
      <BtnBox>
        <Btn onClick={() => handlerBtn(id)}>{label}</Btn>
      </BtnBox>
      <CoverBox id="card-box" />
    </CardBox>
  );
};

export default PokemonCard;
