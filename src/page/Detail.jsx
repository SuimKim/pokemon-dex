import React from "react";
import { useSearchParams } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";
import { BackBox, Logo } from "../style/DetailStyledComponents";
import { store } from "../redux/store";
import { Provider } from "react-redux";
const Detail = () => {
  const [selectedPokemon] = useSearchParams();

  return (
    <Provider store={store}>
      <Logo src="./src/assets/img/logo.svg" alt="" />
      <BackBox>
        <PokemonDetail queryId={selectedPokemon.get("id")} />
      </BackBox>
    </Provider>
  );
};

export default Detail;
