import React from "react";
import { useNavigate } from "react-router-dom";
import { Ball, BtnDex, Logo } from "../style/HomeStyledComponents";
import { BALL, LOGO } from "../assets/imgPath";
import ball from "../assets/img/main-ball.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo src={"/public/img/logo.svg"} alt="" />
      <BtnDex
        onClick={() => {
          navigate("/dex");
        }}
      >
        Open POKEMON Book!
      </BtnDex>
      <Ball src={ball} />
    </>
  );
};

export default Home;
