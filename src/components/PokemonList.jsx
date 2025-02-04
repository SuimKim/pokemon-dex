import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListBoxBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15%);
  justify-content: space-evenly;
`;

const PokemonList = ({ list, myPokemon, setMyPokemon }) => {
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

    const selectedPokemon = list.find((a) => a.id === id); // 선택한 포켓몬

    const newMyPokemon = [...myPokemon]; // 새로운 myPokemon 배열을 만들어서 기존 배열 복사
    newMyPokemon[firstEmptyIndex] = selectedPokemon; // 새로 만든 배열의 첫번째 비어있는 인덱스를 선택한 포켓몬으로 교체

    newMyPokemon.sort((a, b) => {});
    setMyPokemon(newMyPokemon);
  };

  return (
    <>
      <h3>포켓몬목록</h3>
      <ListBoxBox>
        {list.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              list={pokemon}
              handlerBtn={selectMyPokemon}
              label="추가"
            />
          );
        })}
      </ListBoxBox>
    </>
  );
};

export default PokemonList;
