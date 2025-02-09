import React from "react";
import { useNavigate } from "react-router-dom";
import { Ball, BtnDex, Logo } from "../style/HomeStyledComponents";
import POKE_BALL from "../assets/img/main-ball.png";
import MAIN_LOGO from "../assets/img/logo.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo src={MAIN_LOGO} alt="" />
      <BtnDex
        onClick={() => {
          navigate("/dex");
        }}
      >
        Open POKEMON Book!
      </BtnDex>
      <Ball src={POKE_BALL} />
    </>
  );
};

export default Home;
