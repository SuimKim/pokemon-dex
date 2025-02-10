import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ContentsBox,
  ImgBox,
  NameTag,
  NumBox,
  Info,
  BtnBox,
  Btn,
} from "../style/DetailStyledComponents";
import { useAdd } from "../hook/useAdd";

const PokemonDetail = ({ queryId }) => {
  const navigate = useNavigate();

  const [pokemonList, addMyPokemon] = useAdd();

  const clickedPokemon = pokemonList.find((a) => {
    return a.id === Number(queryId);
  });

  const { id, korean_name, img_url, types, description } = clickedPokemon;

  return (
    <>
      <ContentsBox>
        <NumBox>No.{String(queryId).padStart(3, "0")}</NumBox>
        <NameTag>{korean_name}</NameTag>
        <Info>| {types.join(" | ")} |</Info>
        <ImgBox src={img_url} alt="" />
        <Info>{description}</Info>
        <BtnBox>
          <Btn onClick={() => addMyPokemon(id)}>추가하기</Btn>
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
