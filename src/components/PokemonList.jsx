import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import MOCK_DATA from "../mockData";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const PokemonListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 15%));
  row-gap: 2vw;
  justify-content: space-evenly;
  width: 90%;
  padding: 3%;
  box-sizing: border-box;
  background-color: #ffe6c6;
  border-radius: 50px;
`;

const PokemonList = () => {
  const POKE_DATA = MOCK_DATA;
  const { myPokemon, setMyPokemon } = useContext(PokemonContext);

  const selectMyPokemon = (id) => {
    const firstEmptyIndex = myPokemon.indexOf("");
    if (firstEmptyIndex === -1) {
      alert("포켓몬은 6개까지만 선택할 수 있어요!");
      return;
    }

    const isAlreadySelected = myPokemon.find((pokemon) => pokemon.id === id);
    if (isAlreadySelected) {
      alert("이미 저장된 포켓몬입니다!");
      return;
    }

    const selectedPokemon = POKE_DATA.find((a) => a.id === id); // 선택한 포켓몬

    const newMyPokemon = [...myPokemon]; // 새로운 myPokemon 배열을 만들어서 기존 배열 복사
    newMyPokemon[firstEmptyIndex] = selectedPokemon; // 새로 만든 배열의 첫번째 비어있는 인덱스를 선택한 포켓몬으로 교체

    setMyPokemon(newMyPokemon);
  };

  return (
    <>
      <PokemonListBox>
        {POKE_DATA.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              item={pokemon}
              handlerBtn={selectMyPokemon}
              label="추가"
            />
          );
        })}
      </PokemonListBox>
    </>
  );
};

export default PokemonList;
