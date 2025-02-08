import React from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import { BackBox, Logo } from "../style/DexStyledComponents";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Dex = () => {
  useEffect(() => {
    window.scroll(0, sessionStorage.scroll);
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Logo src="./src/assets/img/logo.svg" alt="" />{" "}
      <BackBox>
        <Dashboard />
        <PokemonList />
      </BackBox>
    </Provider>
  );
};

export default Dex;
