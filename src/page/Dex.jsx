import React from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/DashBoard";
import { PokemonProvider } from "../contexts/PokemonContext";
import { BackBox, InnerLine, Logo } from "../style/DexStyledComponents";

const Dex = () => {
  return (
    <PokemonProvider>
      <Logo src="./src/assets/img/logo.svg" alt="" />{" "}
      <BackBox>
        <Dashboard />
        <InnerLine />
        <PokemonList />
      </BackBox>
    </PokemonProvider>
  );
};

export default Dex;
