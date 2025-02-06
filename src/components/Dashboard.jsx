import React from "react";
import PokemonCard from "./PokemonCard";
import {
  DashBoardBox,
  DashLogoBox,
  ListBox,
  MyPokemonBox,
} from "../style/DashBoardStyledComponents";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMyPokemon } from "../redux/pokemonSlice";
import { swalDeleteAlert, swalToast } from "./SweetAlert";

const Dashboard = () => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((a) => a.myPokemon);
  // console.log("result", myPokemon);

  const removeMyPokemon = (id) => {
    swalDeleteAlert().then((result) => {
      if (result.isConfirmed) {
        swalToast("삭제 완료!");

        const deletedPokemon = myPokemon.map((a) => {
          return a !== null && a.id === id ? null : a;
        });

        const firstNullIndex = deletedPokemon.indexOf(null);
        const item = deletedPokemon.splice(firstNullIndex, 1);
        deletedPokemon.splice(6, 0, item[0]);

        dispatch(setMyPokemon(deletedPokemon));
        localStorage.setItem("pokemon", JSON.stringify(deletedPokemon));
      }
    });
  };

  return (
    <>
      <DashBoardBox>
        <MyPokemonBox>
          {myPokemon.map((pokemon, index) => {
            return pokemon === null ? (
              <ListBox key={index} />
            ) : (
              <PokemonCard
                key={pokemon.id + pokemon.korean_name}
                item={pokemon}
                handlerBtn={removeMyPokemon}
                label="삭제"
              />
            );
          })}
        </MyPokemonBox>
      </DashBoardBox>
      <DashLogoBox>
        <img src="./src/assets/img/dash-logo.png" alt="" />
      </DashLogoBox>
    </>
  );
};

export default Dashboard;
