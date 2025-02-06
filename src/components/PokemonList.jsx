import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../mockData";
import { PokemonListBox } from "../style/ListStyledComponents";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setMyPokemon } from "../redux/pokemonSlice";

const PokemonList = () => {
  const POKE_DATA = MOCK_DATA;
  const dispatch = useDispatch();
  const myPokemon = useSelector((a) => a.myPokemon);

  const selectMyPokemon = (pokeId) => {
    const firstNullIndex = myPokemon.indexOf(null);
    if (firstNullIndex === -1) {
      alert("포켓몬은 6개까지만 선택할 수 있어요!");
      return;
    }

    const isAlreadySelected = myPokemon.find((pokemon) =>
      pokemon === null ? pokemon : pokemon.id === pokeId
    );
    if (isAlreadySelected) {
      alert("이미 저장된 포켓몬입니다!");
      return;
    }

    const selectedPokemon = POKE_DATA.find((a) => a.id === pokeId); // 선택한 포켓몬

    const newMyPokemon = [...myPokemon]; // 새로운 myPokemon 배열을 만들어서 기존 배열 복사
    newMyPokemon[firstNullIndex] = selectedPokemon; // 새로 만든 배열의 첫번째 비어있는 인덱스를 선택한 포켓몬으로 교체

    dispatch(setMyPokemon(newMyPokemon));
  };

  return (
    <>
      <PokemonListBox>
        {POKE_DATA.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              item={pokemon}
              handlerBtn={selectMyPokemon}
              label="추가"
            />
          );
        })}
      </PokemonListBox>
    </>
  );
};

export default PokemonList;
