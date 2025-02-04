import React from "react";
import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../mockData";

const PokemonDetail = ({ id }) => {
  const list = MOCK_DATA;
  const navigate = useNavigate();

  const arr = list.find((a) => {
    return a.id === Number(id);
  });
  const { korean_name, img_url, description } = arr;

  return (
    <>
      <h3>{korean_name}의 디테일 페이지</h3>
      <img src={img_url} alt="" />
      <h4>{korean_name}</h4>
      <p>{description}</p>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </button>
    </>
  );
};

export default PokemonDetail;
