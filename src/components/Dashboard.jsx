import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListBoxBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15%);
  justify-content: space-evenly;
`;

const Dashboard = ({ myPokemon, setMyPokemon }) => {
  const removeMyPokemon = (id) => {
    const deletedPokemon = myPokemon.filter((a) => a.id !== id);
    setMyPokemon(deletedPokemon);
  };

  console.log("myPokemon", myPokemon);
  return (
    <>
      <h3>선택포켓몬</h3>

      <ListBoxBox>
        {myPokemon.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              list={pokemon}
              handlerBtn={removeMyPokemon}
              label="삭제"
            />
          );
        })}
      </ListBoxBox>
    </>
  );
};

export default Dashboard;
