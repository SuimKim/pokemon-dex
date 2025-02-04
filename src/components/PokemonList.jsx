import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListBoxBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15%);
  justify-content: space-evenly;
`;

const ListBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  min-height: 100px;
  &:hover {
    cursor: pointer;
  }
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
            <Link key={pokemon.id} to={`/pokemon-detail?id=${pokemon.id}`}>
              <ListBox>
                <PokemonCard
                  list={pokemon}
                  handlerBtn={selectMyPokemon}
                  label="추가"
                />
              </ListBox>
            </Link>
          );
        })}
      </ListBoxBox>
    </>
  );
};

export default PokemonList;
