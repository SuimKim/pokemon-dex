import React from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/DashBoard";
import { PokemonProvider } from "../contexts/PokemonContext";
import { BackBox, InnerLine, Logo } from "../style/DexStyledComponents";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const Dex = () => {
  return (
    <Provider store={store}>
      <Logo src="./src/assets/img/logo.svg" alt="" />{" "}
      <BackBox>
        <Dashboard />
        <InnerLine />
        <PokemonList />
      </BackBox>
    </Provider>
  );
};

export default Dex;
