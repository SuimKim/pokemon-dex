import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnDex = styled.button`
  display: inline-block;
  height: 50px;
`;
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <ImgBox>
        <img src="./src/assets/pokemon_logo.png" alt="" />
      </ImgBox>

      <BtnDex
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감으로 이동
      </BtnDex>
    </>
  );
};

export default Home;
