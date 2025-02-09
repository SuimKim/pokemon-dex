import React from "react";
import {
  Background,
  Select,
  InputBox,
  Input,
  BtnBox,
  DropDownBox,
  DropDownList,
} from "../style/SearchBoxStyledComponents";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { setPokemonList } from "../redux/pokeListSlice";
import MOCK_DATA from "../mockData";
import { useState } from "react";
import SEARCH from "../assets/img/search.png";
import { errorToast } from "../style/Toastify";

const SearchBox = ({}) => {
  const POKE_LIST = MOCK_DATA;

  const dispatch = useDispatch();
  const searchValueRef = useRef(null);
  const typeValueRef = useRef(null);
  const dropDownRef = useRef(null);

  const [autoFill, setAutoFill] = useState([]);

  const searchHandler = () => {
    let searchList = [];
    const typeValue = typeValueRef.current.value;
    const searchKeyword = searchValueRef.current.value;

    !searchKeyword.trim() && errorToast("검색어를 입력해주세요!");

    switch (typeValue) {
      // case "num":
      //   searchList = [
      //     POKE_LIST.find((pokemon) => {
      //       return pokemon.id === Number(searchKeyword);
      //     }),
      //   ];
      //   break;
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
    dispatch(setPokemonList(searchList));
    setAutoFill([]);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
      setAutoFill([]);
    }
  };
  const handleListClicked = (e) => {
    searchValueRef.current.value = e.target.innerHTML;
    searchHandler();
    setAutoFill([]);
  };

  const makeDropDownList = (e) => {
    let timer = 0;

    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        const dropDownList = POKE_LIST.filter((pokemon) => {
          return pokemon.korean_name.includes(e.target.value);
        });
        const dropDownNameList = dropDownList.map((poke) => {
          return poke.korean_name;
        });
        setAutoFill(dropDownNameList);
        e.target.value === "" && setAutoFill([]);
      }, 500);
    }
  };

  return (
    <>
      <Background>
        <Select name="searchValues" ref={typeValueRef}>
          {/* <option value="num">Num</option> */}
          <option value="name">이름</option>
          <option value="types">속성</option>
        </Select>
        <InputBox>
          <Input
            id="search-box"
            type="text"
            ref={searchValueRef}
            onKeyDown={enterHandler}
            onChange={makeDropDownList}
            placeholder="포켓몬 입력!"
          />
          <BtnBox onClick={searchHandler}>
            <img src={SEARCH} alt="" />
          </BtnBox>
        </InputBox>
        <DropDownBox ref={dropDownRef}>
          {autoFill.map((pokemon, index) => {
            return (
              <DropDownList onClick={handleListClicked} key={index}>
                {pokemon}
              </DropDownList>
            );
          })}
        </DropDownBox>
      </Background>
    </>
  );
};

export default SearchBox;
