import styled from "styled-components";
import { CARD_BACK } from "../assets/img/imgPath";

export const MyPokemonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15%);
  justify-content: space-evenly;
  justify-items: center;
  /* row-gap: 2vw; */
  width: 100%;
  box-sizing: border-box;
`;

export const EmptyCard = styled.div`
  border-radius: 2vw;
  /* margin: 10px; */
  box-shadow: 0px 10px 20px #bcbcbcaf;
  /* min-height: 240px; */
  height: 13.5vw;
  width: 10.5vw;
  background-image: url("https://github.com/SuimKim/pokemon-dex/blob/main/src/assets/img/card-back.png?raw=true");
  background-size: cover;
  background-position: center;
`;

export const DashBoardBox = styled.div`
  width: 90%;
  justify-items: center;
  border-radius: 3vw;
  border-top-left-radius: 0;
  padding: 3%;
  background-color: #c3dbe3;
  box-sizing: border-box;
  position: relative;
`;

export const DashLogoBox = styled.div`
  position: relative;
  width: 25%;
  left: -32.5%;
  background-color: #c3dbe3;
  border-top-right-radius: 1.5vw;
  border-top-left-radius: 1.5vw;
  box-sizing: border-box;
  padding: 1% 1% 0 1%;
  img {
    width: 100%;
  }
`;

export const Line = styled.hr`
  width: 55%;
  position: absolute;
  border: 0.1vw solid #3466af;
  top: 4.2vw;
  right: 10%;
`;
