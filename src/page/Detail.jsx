import React from "react";
import { useSearchParams } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";
import styled from "styled-components";

const Logo = styled.img`
  display: flex;
  width: 25%;
  max-height: 400px;
  margin: 1vw auto 1vw auto;
  box-sizing: border-box;
  /* position: fixed; */
`;

const BackBox = styled.div`
  width: 50%;
  /* border: 1px solid black; */
  justify-items: center;
  padding: 2% 0 2% 0;
  background-color: white;
  position: relative;
`;

const Detail = () => {
  const [query, setQuery] = useSearchParams();

  return (
    <>
      <Logo src="./src/assets/img/logo.svg" alt="" />
      <BackBox>
        <PokemonDetail id={query.get("id")} />
      </BackBox>
    </>
  );
};

export default Detail;
