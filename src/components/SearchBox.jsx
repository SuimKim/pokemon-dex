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
   * @param {event} e
   * searchValue 상태를 해당 객체의 value 값으로 바꾼 뒤 autoFill의 상태를 빈 값으로 바꾸고 searchHandler()를 호출한다.
   * 클릭하면 해당 검색어로 검색 -> 비동기 실행됨 / 해결못함 ㅜㅜ
   */
  const handleListClicked = (e) => {
    dispatch(setSearchValue(e.target.innerHTML));
    setAutoFill([]);
    searchHandler();
  };

  /**
   * @returns typeValue 값에 따라 해당하는 로직을 실행한다.
   * setPokemonList의 상태를 검색 결과에 따라 필터링 된 리스트로 교체한 뒤 autoFill의 상태를 빈 값으로 바꾼다.
   */
  const searchHandler = () => {
    let searchList = [];
    const typeValue = typeValueRef.current.value;
    console.log("함수속", searchValue);
    if (!searchValue.trim()) {
      errorToast("검색어를 입력해주세요!");
      return;
    }
    switch (typeValue) {
      case "num":
        if (!Number(searchValue)) {
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

  /**
   *
   * @param {event} e
   * 엔터키를 누르면 searchHandler()가 호출되고 autoFill의 상태를 빈 값으로 교체한다.
   */
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
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
