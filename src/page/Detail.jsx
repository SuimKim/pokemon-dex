import React from "react";
import { useSearchParams } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";
import { BackBox, Logo } from "../style/DetailStyledComponents";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { LOGO } from "../assets/img/imgPath";
const Detail = () => {
  const [selectedPokemon] = useSearchParams();

  return (
    <Provider store={store}>
      <ToastContainer />
      <Logo src={LOGO} alt="" />
      <BackBox>
        <PokemonDetail queryId={selectedPokemon.get("id")} />
      </BackBox>
    </Provider>
  );
};

export default Detail;
