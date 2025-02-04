import React from "react";

const PokemonCard = ({ list, handlerBtn, label }) => {
  const { id, img_url, korean_name } = list;
  return (
    <>
      <img src={img_url} alt="" />
      <p>{id}</p>
      <p>{korean_name}</p>
      <button onClick={() => handlerBtn(id)}>{label}</button>
    </>
  );
};

export default PokemonCard;
