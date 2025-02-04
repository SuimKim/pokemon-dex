import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListBoxBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1vw;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid black;
`;

const ListBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  height: 250px;
`;

const Dashboard = ({ myPokemon, setMyPokemon }) => {
  const removeMyPokemon = (id) => {
    const deletedPokemon = myPokemon.map((a) => {
      return a.id === id ? "" : a;
    });

    const firstEmptyIndex = deletedPokemon.indexOf("");

    const item = deletedPokemon.splice(firstEmptyIndex, 1);
    deletedPokemon.splice(6, 0, item[0]);

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
              key={myPokemon.id}
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
