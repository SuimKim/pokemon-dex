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
import { useSelector } from "react-redux";
import { setSearchValue } from "../redux/searchValueSlice";

const SearchBox = ({}) => {
  const POKE_LIST = MOCK_DATA;

  const dispatch = useDispatch();
  const typeValueRef = useRef(null);
  const searchValue = useSelector((a) => a.searchValueSlice);

  const [autoFill, setAutoFill] = useState([]);

  const searchHandler = () => {
    const typeValue = typeValueRef.current.value;
    if (!searchValue.trim()) {
      errorToast("검색어를 입력해주세요!");
      return;
    }

    let searchList = [];
    switch (typeValue) {
      case "num":
        if (isNaN(searchValue)) {
          errorToast("숫자로 입력해주세요!");
          return;
        } else {
          searchList = [
            POKE_LIST.find((pokemon) => {
              return pokemon.id === Number(searchValue);
            }),
          ];
          break;
        }
      case "name":
        searchList = POKE_LIST.filter((pokemon) => {
          return pokemon.korean_name.includes(searchValue);
        });
        break;
      case "types":
        searchList = POKE_LIST.filter((pokemon) => {
          return pokemon.types.includes(searchValue);
        });
        break;
    }
    dispatch(setPokemonList(searchList));
    setAutoFill([]);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      // !searchValue.trim() && errorToast("검색어를 입력해주세요!");
      searchHandler();
      setAutoFill([]);
    }
  };

  const handleListClicked = (e) => {
    setSearchValue(e.target.innerHTML);
    searchHandler();
    setAutoFill([]);
  };

  const handleInputChange = (e) => {
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

    dispatch(setSearchValue(e.target.value));
  };

  return (
    <>
      <Background>
        <Select name="searchValues" ref={typeValueRef}>
          <option value="name">이름</option>
          <option value="types">속성</option>
          <option value="num">Num</option>
        </Select>
        <InputBox>
          <Input
            id="search-box"
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={enterHandler}
            placeholder="포켓몬 입력!"
          />
          <BtnBox onClick={searchHandler}>
            <img src={SEARCH} alt="" />
          </BtnBox>
        </InputBox>
        <DropDownBox>
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
