import React from "react";
import { useNavigate } from "react-router-dom";
import { Ball, BtnDex, Logo } from "../style/HomeStyledComponents";
import { BALL, LOGO } from "../assets/img/imgPath";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo src={LOGO} alt="" />
      <BtnDex
        onClick={() => {
          navigate("/dex");
        }}
      >
        Open POKEMON Book!
      </BtnDex>
      <Ball src={BALL} />
    </>
  );
};

export default Home;
