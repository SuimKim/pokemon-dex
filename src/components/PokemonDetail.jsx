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
import { useMyPokemon } from "../hook/useMyPokemon";

const PokemonDetail = ({ queryId }) => {
  const navigate = useNavigate();

  const { pokemonList, addMyPokemon } = useMyPokemon();

  const clickedPokemon = pokemonList.find((a) => {
    return a.id === Number(queryId); // 쿼리아이디 값으로 리스트에서 해당 포켓몬 꺼내오기
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
