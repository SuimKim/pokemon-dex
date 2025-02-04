import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  min-height: 100px;
  width: 15%;
  max-width: 200px;
`;

const ListBoxBox = styled.div`
  display: flex;
  border: 1px solid black;
  position: relative;
`;

const Dashboard = ({ myPokemon, setMyPokemon }) => {
  const removeMyPokemon = (id) => {
    const deletedPokemon = myPokemon.filter((a) => a.id !== id);
    setMyPokemon(deletedPokemon);
  };

  // console.log("myPokemon", myPokemon);
  return (
    <>
      <h3>선택포켓몬</h3>

      <ListBoxBox>
        {myPokemon.map((pokemon) => {
          return (
            <ListBox key={pokemon.id}>
              <PokemonCard
                list={pokemon}
                handlerBtn={removeMyPokemon}
                label="삭제"
              />
            </ListBox>
          );
        })}
      </ListBoxBox>
    </>
  );
};

export default Dashboard;
