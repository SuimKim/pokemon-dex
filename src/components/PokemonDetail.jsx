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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setMyPokemon } from "../redux/pokemonSlice";
import { swalAlert, swalToast } from "./SweetAlert";

const PokemonDetail = ({ queryId }) => {
  const POKE_DATA = MOCK_DATA;
  const navigate = useNavigate();

  const clickedPokemon = POKE_DATA.find((a) => {
    return a.id === Number(queryId);
  });
  const { id, korean_name, img_url, types, description } = clickedPokemon;

  const dispatch = useDispatch();
  const myPokemon = useSelector((a) => a.myPokemon);

  const addMyPokemon = (pokeId) => {
    const firstNullIndex = myPokemon.indexOf(null);
    if (firstNullIndex === -1) {
      swalAlert("포켓몬은 6개까지 추가할 수 있어요.");
      return;
    }

    const isAlreadySelected = myPokemon.find((pokemon) =>
      pokemon === null ? pokemon : pokemon.id === pokeId
    );
    if (isAlreadySelected) {
      swalAlert("이미 추가된 포켓몬이에요.");
      return;
    }

    const selectedPokemon = POKE_DATA.find((a) => a.id === pokeId); // 선택한 포켓몬

    const newMyPokemon = [...myPokemon]; // 새로운 myPokemon 배열을 만들어서 기존 배열 복사
    newMyPokemon[firstNullIndex] = selectedPokemon; // 새로 만든 배열의 첫번째 비어있는 인덱스를 선택한 포켓몬으로 교체

    dispatch(setMyPokemon(newMyPokemon));
    localStorage.setItem("pokemon", JSON.stringify(newMyPokemon));
    swalToast("추가 완료!");
  };
  return (
    <>
      <ContentsBox>
        <NumBox>No.{String(queryId).padStart(3, "0")}</NumBox>
        <NameTag>{korean_name}</NameTag>
        <Info>{types}</Info>
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
