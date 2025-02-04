import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { useState } from "react";

const ListBoxBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15%);
  justify-content: space-evenly;
`;

const PokemonList = ({ list, myPokemon, setMyPokemon }) => {
  console.log("myPokemon", myPokemon);

  const selectMyPokemon = (id) => {
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
              list={pokemon}
              key={pokemon.id}
              selectMyPokemon={selectMyPokemon}
            />
          );
        })}
      </ListBoxBox>
    </>
  );
};

export default PokemonList;
