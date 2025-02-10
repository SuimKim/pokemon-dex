import React from "react";
import PokemonCard from "./PokemonCard";
import {
  DashBoardBox,
  DashLogoBox,
  EmptyCard,
  Line,
  MyPokemonBox,
} from "../style/DashBoardStyledComponents";
import { useSelector, useDispatch } from "react-redux";
import { setMyPokemon } from "../redux/myPokeSlice";
import { notify } from "../style/Toastify";
import { swalDeleteAlert } from "../style/SweetAlert";
import DASH_LOGO from "../assets/img/dash-logo.png";
import { memo } from "react";

const EmptyItem = memo(() => {
  return <EmptyCard />;
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((a) => a.myPokeSlice);

  const removeMyPokemon = (id) => {
    swalDeleteAlert().then((result) => {
      if (result.isConfirmed) {
        notify("삭제 완료!");

        const deletedPokemon = myPokemon.map((a) => {
          return a !== null && a.id === id ? null : a;
        }); // 새로운 배열에 선택한 포켓몬을 삭제한 자리를 다시 null로 채움. 원래 null이었던 부분도 마찬가지로 null로 채움.

        // 빈 카드 뒤로 보내기 위한 정렬 과정
        const firstNullIndex = deletedPokemon.indexOf(null); // 빈 카드 찾기
        const item = deletedPokemon.splice(firstNullIndex, 1); // 빈 카드 삭제
        deletedPokemon.splice(6, 0, item[0]); // 삭제한 빈 카드 맨 뒤에 붙이기

        dispatch(setMyPokemon(deletedPokemon));
        localStorage.setItem("pokemon", JSON.stringify(deletedPokemon));
      }
    });
  };

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
