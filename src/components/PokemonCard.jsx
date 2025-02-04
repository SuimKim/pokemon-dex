import React from "react";
import styled from "styled-components";

const ListBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  min-height: 100px;
`;
const PokemonCard = ({ list, selectMyPokemon }) => {
  const { id, img_url, korean_name } = list;
  return (
    <>
      <ListBox>
        <img src={img_url} alt="" />
        <p>{id}</p>
        <p>{korean_name}</p>
        <button onClick={() => selectMyPokemon(id)}>추가</button>
      </ListBox>
    </>
  );
};

export default PokemonCard;
