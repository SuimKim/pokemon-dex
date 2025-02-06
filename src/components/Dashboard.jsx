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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMyPokemon } from "../redux/pokemonSlice";

const Dashboard = () => {
  // const { myPokemon, setMyPokemon } = useContext(PokemonContext);
  const dispatch = useDispatch();
  const result = useSelector((a) => a.myPokemon);
  console.log("result", result);

  const removeMyPokemon = (id) => {
    const deletedPokemon = result.map((a) => {
      return a.id === id ? "" : a;
    });

    const firstEmptyIndex = deletedPokemon.indexOf("");
    const item = deletedPokemon.splice(firstEmptyIndex, 1);
    deletedPokemon.splice(6, 0, item[0]);

    // setMyPokemon(deletedPokemon);
    dispatch(setMyPokemon(deletedPokemon));
  };

  return (
    <>
      <DashLogoBox>
        <img src="./src/assets/img/dash-logo.png" alt="" />
      </DashLogoBox>
      <DashBoardBox>
        <MyPokemonBox>
          {result.map((pokemon) => {
            return !pokemon.id ? (
              <ListBox>
                <img src="./src/assets/img/card-back.png" alt="" />
              </ListBox>
            ) : (
              <PokemonCard
                key={result.id}
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
