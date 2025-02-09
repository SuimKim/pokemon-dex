import React from "react";
import { useSearchParams } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";
import { BackBox, Logo } from "../style/DetailStyledComponents";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import MAIN_LOGO from "../assets/img/logo.svg";

const Detail = () => {
  const [selectedPokemon] = useSearchParams();

  return (
    <Provider store={store}>
      <ToastContainer />
      <Logo src={MAIN_LOGO} alt="" />
      <BackBox>
        <PokemonDetail queryId={selectedPokemon.get("id")} />
      </BackBox>
    </Provider>
  );
};

export default Detail;
