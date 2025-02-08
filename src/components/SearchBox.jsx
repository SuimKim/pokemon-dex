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
import MOCK_DATA from "../mockData";

const SearchBox = ({}) => {
  const POKE_LIST = MOCK_DATA;

  const dispatch = useDispatch();
  const searchValueRef = useRef(null);
  const typeValueRef = useRef(null);

  const searchHandler = () => {
    let searchList = [];
    const searchKeyword = searchValueRef.current.value;
    const typeValue = typeValueRef.current.value;

    switch (typeValue) {
      case "num":
        searchList = [
          POKE_LIST.find((pokemon) => {
            return pokemon.id === Number(searchKeyword);
          }),
        ];
        break;
      case "name":
        searchList = POKE_LIST.filter((pokemon) => {
          return pokemon.korean_name.includes(searchKeyword);
        });
        break;
      case "types":
        searchList = POKE_LIST.filter((pokemon) => {
          return pokemon.types.includes(searchKeyword);
        });
        break;
    }
    console.log("searchList", searchList);
    dispatch(setPokemonList(searchList));
  };

  return (
    <>
      <Background>
        <Select name="searchValues" ref={typeValueRef}>
          <option value="num">Num</option>
          <option value="name">이름</option>
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
