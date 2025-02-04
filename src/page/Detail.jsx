import React from "react";
import { useSearchParams } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";

const Detail = () => {
  const [query, setQuery] = useSearchParams();

  return (
    <>
      <h1>디테일</h1>
      <PokemonDetail id={query.get("id")} />
    </>
  );
};

export default Detail;
