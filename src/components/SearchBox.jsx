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
import { errorToast } from "../style/Toastify";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "../redux/pokeListSlice";
import { setSearchValue } from "../redux/searchValueSlice";
import SEARCH from "../assets/img/search.png";
import MOCK_DATA from "../mockData";
import { useEffect } from "react";

const SearchBox = ({}) => {
  const POKE_LIST = MOCK_DATA;

  const dispatch = useDispatch();
  const typeValueRef = useRef(null);
  const searchValue = useSelector((a) => a.searchValueSlice);

  const [autoFill, setAutoFill] = useState([]);

  /**
   * @returns typeValue 값에 따라 해당하는 로직을 실행한다.
   * setPokemonList의 상태를 검색 결과에 따라 필터링 된 리스트로 교체한 뒤 autoFill의 상태를 빈 값으로 바꾼다.
   */
  const searchHandler = (keyword) => {
    let searchList = [];
    const typeValue = typeValueRef.current.value;
    console.log("함수속", searchValue);
    if (!keyword.trim()) {
      errorToast("검색어를 입력해주세요!");
      return;
    }
    switch (typeValue) {
      case "num":
        if (!Number(keyword)) {
          errorToast("숫자로 입력해주세요!");
          return;
        } else {
          searchList = [
            POKE_LIST.find((pokemon) => {
              return pokemon.id === Number(keyword);
            }),
          ];
          break;
        }
      case "name":
        searchList = POKE_LIST.filter((pokemon) => {
          return pokemon.korean_name.includes(keyword);
        });
        break;
      case "types":
        searchList = POKE_LIST.filter((pokemon) => {
          return pokemon.types.includes(keyword);
        });
        break;
    }
    dispatch(setPokemonList(searchList));
    setAutoFill([]);
  };

  /**
   *
   * @param {event} e
   * 엔터키를 누르면 searchHandler()가 호출되고 autoFill의 상태를 빈 값으로 교체한다.
   */
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler(searchValue);
      setAutoFill([]);
    }
  };

  /**
   *
   * @param {event} e
   * 쓰로틀링 적용
   * 인풋 밸류에 따라 필터링 된 포켓몬 이름이 자동완성 창에 리스트로 출력된다.
   * searchValue의 상태를 e.target.value로 교체한다.
   */
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

  /**
   * @param {event} e
   */
  const handleListClicked = (e) => {
    const keyword = e.target.innerHTML;
    const searchList = POKE_LIST.filter((pokemon) => {
      return pokemon.korean_name.includes(keyword);
    });
    dispatch(setPokemonList(searchList));
    dispatch(setSearchValue(keyword));
    setAutoFill([]);
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
          <BtnBox onClick={() => searchHandler(searchValue)}>
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
