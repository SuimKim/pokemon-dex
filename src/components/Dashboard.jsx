import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const MyPokemonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2vw;
  width: 100%;
  box-sizing: border-box;
  padding: 3%;
`;

const ListBox = styled.div`
  img {
    width: 100%;
    border-radius: 30px;
  }
`;

const DashBoardBox = styled.div`
  width: 90%;
  justify-items: center;
  border-radius: 50px;
  /* border: 3px solid #3466af; */

  background-color: #c3dbe3;
`;

const DashLogoBox = styled.div`
  width: 40%;
  background-color: #c3dbe3;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-sizing: border-box;
  padding: 1% 1% 0 1%;
  img {
    width: 100%;
  }
`;
const Dashboard = () => {
  const { myPokemon, setMyPokemon } = useContext(PokemonContext);
  const removeMyPokemon = (id) => {
    const deletedPokemon = myPokemon.map((a) => {
      return a.id === id ? "" : a;
    });

    const firstEmptyIndex = deletedPokemon.indexOf("");
    const item = deletedPokemon.splice(firstEmptyIndex, 1);
    deletedPokemon.splice(6, 0, item[0]);

    setMyPokemon(deletedPokemon);
  };

  return (
    <>
      <DashLogoBox>
        <img src="./src/assets/img/dash-logo.png" alt="" />
      </DashLogoBox>
      <DashBoardBox>
        <MyPokemonBox>
          {myPokemon.map((pokemon) => {
            return !pokemon.id ? (
              <ListBox>
                <img src="./src/assets/img/card-back.png" alt="" />
              </ListBox>
            ) : (
              <PokemonCard
                key={myPokemon.id}
                item={pokemon}
                handlerBtn={removeMyPokemon}
                label="삭제"
              />
            );
          })}
        </MyPokemonBox>
      </DashBoardBox>
    </>
  );
};

export default Dashboard;
