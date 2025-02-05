// 프로바이더 하나 만들어서 바깥으로 내보냄 ->

import { createContext, useState } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const SET_DATA = Array.from({ length: 6 }, () => "");
  const [myPokemon, setMyPokemon] = useState(SET_DATA);

  return (
    <PokemonProvider.Provider value={(myPokemon, setMyPokemon)}>
      {children}
    </PokemonProvider.Provider>
  );
}
