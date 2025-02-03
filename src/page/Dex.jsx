import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../mockData";

const ListBoxBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20%);
  justify-content: space-evenly;
`;
const ListBox = styled.div`
  border: 1px solid black;
  margin: 10px;
`;
const Dex = () => {
  const list = MOCK_DATA;
  return (
    <>
      <h1>dex</h1>

      <ListBoxBox>
        {list.map((pokemon) => {
          return (
            <ListBox>
              <img src={pokemon.img_url} alt="" />
              <p>{pokemon.id}</p>
              <p>{pokemon.korean_name}</p>
              <button>추가</button>
            </ListBox>
          );
        })}
      </ListBoxBox>
    </>
  );
};

export default Dex;
