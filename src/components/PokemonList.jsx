import React from "react";
import PokemonCard from "./PokemonCard";
import SearchBox from "../components/SearchBox";
import { DexLogoBox, PokemonListBox } from "../style/ListStyledComponents";
import DEX_LOGO from "../assets/img/dex-logo.png";
import { useMyPokemon } from "../hook/useMyPokemon";

const PokemonList = () => {
  const { pokemonList, addMyPokemon } = useMyPokemon();

  return (
    <>
      <SearchBox />
      <PokemonListBox>
        <DexLogoBox>
          <img src={DEX_LOGO} alt="" />
        </DexLogoBox>
        {pokemonList.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              item={pokemon}
              handlerBtn={addMyPokemon}
              label="추가"
            />
          );
        })}
      </PokemonListBox>
    </>
  );
};

export default PokemonList;
