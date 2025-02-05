import React from "react";
import { useNavigate } from "react-router-dom";
import { Ball, BtnDex, Logo } from "../style/HomeStyledComponents";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo src="./src/assets/img/logo.svg" alt="" />
      <BtnDex
        onClick={() => {
          navigate("/dex");
        }}
      >
        Open POKEMON Book!
      </BtnDex>
      <Ball src="./src/assets/img/main-ball.png" />
    </>
  );
};

export default Home;
