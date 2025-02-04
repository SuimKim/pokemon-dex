import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  min-height: 100px;
`;

const ListBoxBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15%);
  justify-content: space-evenly;
`;

const Dashboard = ({ myPokemon, setMyPokemon }) => {
  return (
    <>
      <h3>선택포켓몬</h3>
      <ListBoxBox>
        {myPokemon.map((pokemon) => {
          return <PokemonCard list={pokemon} key={pokemon.id} />;
        })}

        {/* <PokemonCard list={myPokemon[0]} />
        <PokemonCard list={myPokemon[1]} />
        <PokemonCard list={myPokemon[2]} />
        <PokemonCard list={myPokemon[3]} />
        <PokemonCard list={myPokemon[4]} />
        <PokemonCard list={myPokemon[5]} /> */}
      </ListBoxBox>
    </>
  );
};

export default Dashboard;
