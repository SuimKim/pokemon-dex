import React from "react";
import {
  Background,
  Select,
  InputBox,
  Input,
  BtnBox,
} from "../style/SearchBoxStyledComponents";
const SearchBox = () => {
  return (
    <>
      <Background>
        <Select name="searchValues">
          <option value="korean_name">이름</option>
          <option value="id">Number</option>
          <option value="types">속성</option>
        </Select>
        <InputBox>
          <Input type="text" placeholder="포켓몬 입력!" />
          <BtnBox>
            <img src="./src/assets/img/search.png" alt="" />
          </BtnBox>
        </InputBox>
      </Background>
    </>
  );
};

export default SearchBox;
