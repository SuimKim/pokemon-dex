import styled from "styled-components";

export const MyPokemonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2vw;
  width: 100%;
  box-sizing: border-box;
  padding: 3%;
`;

export const ListBox = styled.div`
  img {
    width: 100%;
    border-radius: 30px;
  }
`;

export const DashBoardBox = styled.div`
  width: 90%;
  justify-items: center;
  border-radius: 50px;
  /* border: 3px solid #3466af; */

  background-color: #c3dbe3;
`;

export const DashLogoBox = styled.div`
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
