import React from "react";
import PokemonCard from "./PokemonCard";
import {
  DashBoardBox,
  DashLogoBox,
  EmptyCard,
  Line,
  MyPokemonBox,
} from "../style/DashBoardStyledComponents";
import DASH_LOGO from "../assets/img/dash-logo.png";
import { memo } from "react";
import { useMyPokemon } from "../hook/useMyPokemon";

const EmptyItem = memo(() => {
  return <EmptyCard />;
});

const Dashboard = () => {
  const { myPokemon, removeMyPokemon } = useMyPokemon();

  return (
    <>
      <DashLogoBox>
        <img src={DASH_LOGO} />
      </DashLogoBox>
      <Line />
      <DashBoardBox>
        <MyPokemonBox>
          {myPokemon.map((pokemon, index) => {
            return pokemon === null ? (
              <EmptyItem key={index} />
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
    </>
  );
};

export default Dashboard;
