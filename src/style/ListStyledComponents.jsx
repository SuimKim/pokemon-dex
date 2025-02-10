import styled from "styled-components";

export const PokemonListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15%);
  gap: 3vw;
  /* row-gap: 2vw; */
  justify-content: space-evenly;
  justify-items: center;
  width: 90%;
  padding: 3%;
  box-sizing: border-box;
  background-color: #ffe6c6;
  border-radius: 3vw;
  position: relative;
  border-top-right-radius: 0;
  margin: 0 auto 0 auto;

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 5vw;
  }
`;

export const DexLogoBox = styled.div`
  position: absolute;
  width: 27.7%;
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
