import React from "react";
import MOCK_DATA from "../mockData";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import { useState } from "react";
import styled from "styled-components";

const Logo = styled.img`
  /* border: 1px solid black; */
  display: flex;
  width: 50%;
  /* left: 35%; */
  max-height: 400px;
  margin: 1vw auto 1vw auto;
  box-sizing: border-box;
  /* position: fixed; */
`;

const BackBox = styled.div`
  width: 90%;
  /* border: 1px solid black; */
  justify-items: center;
  padding: 2% 0 5% 0;
  background-color: white;
  position: relative;
`;

const InnerLine = styled.hr`
  width: 90%;
  border: 2px solid #e4e4e4;
  margin: 3% 0 3% 0;
`;

const Dex = () => {
  const list = MOCK_DATA;
  const SET_DATA = Array.from({ length: 6 }, () => "");
  const [myPokemon, setMyPokemon] = useState(SET_DATA);
  return (
    <>
      <Logo src="./src/assets/img/logo.svg" alt="" />
      <BackBox>
        <Dashboard
          list={list}
          myPokemon={myPokemon}
          setMyPokemon={setMyPokemon}
        />
        <InnerLine />
        <PokemonList
          list={list}
          myPokemon={myPokemon}
          setMyPokemon={setMyPokemon}
        />
      </BackBox>
    </>
  );
};

export default Dex;
