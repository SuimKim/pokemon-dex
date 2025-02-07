import React from "react";
import {
  Background,
  Select,
  InputBox,
  Input,
  BtnBox,
} from "../style/SearchBoxStyledComponents";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { setPokemonList } from "../redux/pokeListSlice";
import { useSelector } from "react-redux";
const SearchBox = ({}) => {
  const pokemonList = useSelector((a) => a.pokeListSlice);
  const dispatch = useDispatch();
  const searchValueRef = useRef(null);
  const typeValueRef = useRef(null);

  const searchHandler = () => {
    let searchList = [];

    switch (typeValueRef.current.value) {
      case "name":
        searchList = pokemonList.filter((pokemon) => {
          return pokemon.korean_name.includes(searchValueRef.current.value);
        });
      // case "num":
      //   searchList = pokemonList.find((pokemon) => {
      //     return pokemon.id === Number(searchValueRef.current.value);
      //   });
      case "types":
        searchList = pokemonList.filter((pokemon) => {
          return pokemon.types.includes(searchValueRef.current.value);
        });
    }

    dispatch(setPokemonList(searchList));
  };

  return (
    <>
      <Background>
        <Select name="searchValues" ref={typeValueRef}>
          <option value="name">이름</option>
          {/* <option value="num">Num</option> */}
          <option value="types">속성</option>
        </Select>
        <InputBox>
          <Input type="text" ref={searchValueRef} placeholder="포켓몬 입력!" />
          <BtnBox onClick={searchHandler}>
            <img src="./src/assets/img/search.png" alt="" />
          </BtnBox>
        </InputBox>
      </Background>
    </>
  );
};

export default SearchBox;
