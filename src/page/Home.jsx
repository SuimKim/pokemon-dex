import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BtnDex = styled.button`
  position: absolute;
  height: 5vw;
  width: 25vw;
  font-size: 2vw;
  top: 30vw;
  right: 13vw;
  background-color: white;
  border: 5px solid #3466af;

  &:hover {
    cursor: pointer;
    border: 5px solid #ffcb05;
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 60vw;
  right: 5vw;
`;

const Ball = styled.img`
  position: absolute;
  width: 55vw;
  top: 16vw;
  left: 0;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo src="./src/assets/logo.svg" alt="" />
      <Ball src="./src/assets/main-ball.png" />

      <BtnDex
        onClick={() => {
          navigate("/dex");
        }}
      >
        Go POKEMON Book!
      </BtnDex>
    </>
  );
};

export default Home;
