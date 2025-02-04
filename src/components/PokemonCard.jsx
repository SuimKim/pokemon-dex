import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CoverBox = styled.div`
  /* background-color: #00000053; */
  width: 100%;
  height: 100%;
  position: relative;
  top: -210px;
  &:hover {
    cursor: pointer;
  }
`;

const ListBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  min-height: 250px;
  /* background-color: white; */
  z-index: 1;
`;

const Btn = styled.button`
  position: relative;
  z-index: 1;
`;
const PokemonCard = ({ list, handlerBtn, label }) => {
  const navigate = useNavigate();

  if (list === null) {
    return <ListBox></ListBox>;
  } else {
    const { id, img_url, korean_name } = list;
    return (
      <ListBox
        onClick={(e) => {
          e.target.id === "card-box" && navigate(`/pokemon-detail?id=${id}`);
        }}
      >
        <img src={img_url} alt="" />
        <p>{id}</p>
        <p>{korean_name}</p>
        <Btn onClick={() => handlerBtn(id)}>{label}</Btn>
        <CoverBox id="card-box" />
      </ListBox>
    );
  }
};

export default PokemonCard;
