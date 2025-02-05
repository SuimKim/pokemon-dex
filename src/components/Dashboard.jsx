import React from "react";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import {
  DashBoardBox,
  DashLogoBox,
  ListBox,
  MyPokemonBox,
} from "../style/DashBoardStyledComponents";

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
