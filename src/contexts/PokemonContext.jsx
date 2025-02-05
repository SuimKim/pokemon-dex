import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const SET_DATA = Array.from({ length: 6 }, () => "");
  const [myPokemon, setMyPokemon] = useState(SET_DATA);

  return (
    <PokemonContext.Provider value={{ myPokemon, setMyPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
