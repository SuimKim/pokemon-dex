import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BtnDex = styled.button`
  /* position: absolute; */
  height: 5vw;
  width: 30%;
  font-size: 2vw;
  background-color: white;
  border: 5px solid #3466af;
  display: block;
  margin: 2.5vw auto 1.5vw auto;
  &:hover {
    cursor: pointer;
    border: 5px solid #ffcb05;
  }
`;

const Logo = styled.img`
  display: flex;
  width: 60vw;
  max-height: 400px;
  margin: 2vw auto 0 auto;
  box-sizing: border-box;
`;

const Ball = styled.img`
  width: 60vw;
  max-width: 1000px;
  display: inline-block;
`;

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
