import React from "react";
import MOCK_DATA from "../mockData";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import { useState } from "react";

const Dex = () => {
  const list = MOCK_DATA;
  const [myPokemon, setMyPokemon] = useState([]);
  return (
    <>
      <h1>dex</h1>
      <Dashboard
        list={list}
        myPokemon={myPokemon}
        setMyPokemon={setMyPokemon}
      />
      <PokemonList
        list={list}
        myPokemon={myPokemon}
        setMyPokemon={setMyPokemon}
      />
    </>
  );
};

export default Dex;
