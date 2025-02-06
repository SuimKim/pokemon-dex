import styled from "styled-components";

export const PokemonListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 15%));
  row-gap: 2vw;
  justify-content: space-evenly;
  width: 90%;
  padding: 3%;
  box-sizing: border-box;
  background-color: #ffe6c6;
  border-radius: 3vw;
  position: relative;
  border-top-right-radius: 0;
`;

export const DexLogoBox = styled.div`
  position: absolute;
  width: 25%;
  right: 0;
  top: -4.5vw;
  background-color: #ffe6c6;
  border-top-right-radius: 1.5vw;
  border-top-left-radius: 1.5vw;
  box-sizing: border-box;
  padding: 1% 1% 0 1%;
  img {
    width: 100%;
  }
`;
