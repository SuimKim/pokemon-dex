import React from "react";
import { useSearchParams } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";
import styled from "styled-components";
import { BackBox, Logo } from "../style/DetailStyledComponents";

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
