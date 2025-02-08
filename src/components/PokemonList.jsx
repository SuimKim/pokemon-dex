import React from "react";
import PokemonCard from "./PokemonCard";
import SearchBox from "../components/SearchBox";
import { DexLogoBox, PokemonListBox } from "../style/ListStyledComponents";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { swalAlert } from "./SweetAlert";
import { setMyPokemon } from "../redux/myPokeSlice";
import { notify } from "./Toastify";

const PokemonList = () => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((a) => a.myPokeSlice);
  const pokemonList = useSelector((a) => a.pokeListSlice);

  const selectMyPokemon = (pokeId) => {
    const firstNullIndex = myPokemon.indexOf(null);
    if (firstNullIndex === -1) {
      swalAlert("포켓몬은 6개까지 추가할 수 있어요.");
      return;
    }

    const isAlreadySelected = myPokemon.find((pokemon) =>
      pokemon === null ? pokemon : pokemon.id === pokeId
    );
    if (isAlreadySelected) {
      swalAlert("이미 추가된 포켓몬이에요.");
      return;
    }

    const selectedPokemon = pokemonList.find((a) => a.id === pokeId); // 선택한 포켓몬

    const newMyPokemon = [...myPokemon]; // 새로운 myPokemon 배열을 만들어서 기존 배열 복사
    newMyPokemon[firstNullIndex] = selectedPokemon; // 새로 만든 배열의 첫번째 비어있는 인덱스를 선택한 포켓몬으로 교체

    dispatch(setMyPokemon(newMyPokemon));
    localStorage.setItem("pokemon", JSON.stringify(newMyPokemon));
    notify("추가 완료!");
  };

  return (
    <>
      <SearchBox />
      <PokemonListBox>
        <DexLogoBox>
          <img src="./src/assets/img/dex-logo.png" alt="" />
        </DexLogoBox>
        {pokemonList.map((pokemon) => {
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
