import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CoverBox = styled.div`
  /* background-color: #00000053; */
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;

const CardBox = styled.div`
  border-radius: 20px;
  position: relative;
  margin: 10px;
  background-color: white;
  z-index: 1;
  justify-items: center;
  box-shadow: 0px 10px 20px #bcbcbcaf;

  &:hover {
    box-shadow: 0px 10px 30px #989898ad;
    transition: all 0.3s;
    transform: translateY(-10px);
  }
`;

const NumBox = styled.div`
  position: absolute;
  background-color: #ffbd6c;
  padding: 5px 10px 5px 10px;
  border-radius: 20px;
  width: 30px;
  font-size: 1em;
  top: 15px;
  left: 15px;
`;
const NameTag = styled.p`
  position: absolute;
  top: 20px;
  left: 75px;
  font-size: 1.2em;
  font-weight: bold;
`;
const ImgBox = styled.img`
  position: relative;
  display: flex;
  top: 30px;
  width: 100%;
`;
const BtnBox = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  margin-top: 10px;
  width: 100%;
`;
const Btn = styled.button`
  position: relative;
  width: 50%;
  height: 35px;
  background-color: white;
  border: 2px solid #3466af;
  border-radius: 20px;
  z-index: 1;
  margin: 10px;
  box-sizing: border-box;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #ffcb05;
  }
`;
const PokemonCard = ({ item, handlerBtn, label }) => {
  const { id, img_url, korean_name } = item;

  const navigate = useNavigate();

  return (
    <CardBox
      onClick={(e) => {
        e.target.id === "card-box" && navigate(`/pokemon-detail?id=${id}`);
      }}
    >
      <NumBox>{String(id).padStart(3, "0")}</NumBox>
      <NameTag>{korean_name}</NameTag>
      <ImgBox src={img_url} alt="" />
      <BtnBox>
        <Btn onClick={() => handlerBtn(id)}>{label}</Btn>
        <Btn onClick={() => handlerBtn(id)}>{label}</Btn>
      </BtnBox>
      <CoverBox id="card-box" />
    </CardBox>
  );
};

export default PokemonCard;
