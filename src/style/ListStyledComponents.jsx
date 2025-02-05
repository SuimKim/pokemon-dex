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
  border-radius: 50px;
`;
