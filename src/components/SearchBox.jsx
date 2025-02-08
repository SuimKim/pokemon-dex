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

const SearchBox = ({}) => {
  const POKE_LIST = MOCK_DATA;

  const dispatch = useDispatch();
  const searchValueRef = useRef(null);
  const typeValueRef = useRef(null);
  const dropDownRef = useRef(null);

  const [test, setTest] = useState(["검색어를 입력해봐요!"]);

  const searchHandler = () => {
    let searchList = [];
    const typeValue = typeValueRef.current.value;
    const searchKeyword = searchValueRef.current.value;

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
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const openDropDownList = () => {
    dropDownRef.current.style.display = "block";
  };
  const closeDropDownList = () => {
    dropDownRef.current.style.display = "none";
  };

  const testFunc = (e) => {
    if (e.target.value === "") {
      setTest(["검색어를 입력해봐요!"]);
      return;
    }
    const testList = POKE_LIST.filter((pokemon) => {
      return pokemon.korean_name.includes(e.target.value);
    });
    const testNameList = testList.map((poke) => {
      return poke.korean_name;
    });
    console.log("testList", testNameList);
    setTest(testNameList);
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
            type="text"
            ref={searchValueRef}
            onKeyDown={enterHandler}
            onFocus={openDropDownList}
            onBlur={closeDropDownList}
            onChange={testFunc}
            placeholder="포켓몬 입력!"
          />
          <BtnBox onClick={searchHandler}>
            <img src="./src/assets/img/search.png" alt="" />
          </BtnBox>
        </InputBox>
        <DropDownBox ref={dropDownRef}>
          {test.map((pokemon, index) => {
            return <DropDownList key={index}>{pokemon}</DropDownList>;
          })}
        </DropDownBox>
      </Background>
    </>
  );
};

export default SearchBox;
