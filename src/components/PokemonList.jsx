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
    if (myPokemon.length >= 6) {
      alert("6초과");
      return;
    }
    const existingPokemon = myPokemon.find((pokemon) => pokemon.id === id);

    if (existingPokemon) {
      alert("이미 저장된 포켓몬입니다!");
      return;
    }

    const selectedPokemon = list.find((a) => a.id === id);
    setMyPokemon([...myPokemon, selectedPokemon]);
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
