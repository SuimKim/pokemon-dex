import React from "react";
import { useNavigate } from "react-router-dom";
import { Ball, BtnDex, Logo } from "../style/HomeStyledComponents";

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
      <Logo src="./src/assets/img/logo.svg" alt="" />

      <ImgBox>
        <img src="./src/assets/pokemon_logo.png" alt="" />
      </ImgBox>

      <BtnDex
        onClick={() => {
          navigate("/dex");
        }}
      >
        Open POKEMON Book!
      </BtnDex>
    </>
  );
};

export default Home;
