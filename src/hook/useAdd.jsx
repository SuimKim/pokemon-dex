import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { swalAlert } from "../style/SweetAlert";
import { notify } from "../style/Toastify";
import { setMyPokemon } from "../redux/myPokeSlice";

export const useAdd = () => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((a) => a.myPokeSlice);
  const pokemonList = useSelector((a) => a.pokeListSlice);

  const addMyPokemon = (pokeId) => {
    const firstNullIndex = myPokemon.indexOf(null);
    if (firstNullIndex === -1) {
      swalAlert("포켓몬은 6개까지 추가할 수 있어요.");
      return;
    }

    const isAlreadySelected = myPokemon.find((pokemon) =>
      pokemon === null ? pokemon : pokemon.id === pokeId
    );
    if (isAlreadySelected) {
      swalAlert("이미 추가된 포켓몬이에요.");
      return;
    }

    const selectedPokemon = pokemonList.find((a) => a.id === pokeId); // 선택한 포켓몬

    const newMyPokemon = [...myPokemon]; // 새로운 myPokemon 배열을 만들어서 기존 배열 복사
    newMyPokemon[firstNullIndex] = selectedPokemon; // 새로 만든 배열의 첫번째 비어있는 인덱스를 선택한 포켓몬으로 교체

    dispatch(setMyPokemon(newMyPokemon));
    localStorage.setItem("pokemon", JSON.stringify(newMyPokemon));
    notify("추가 완료!");
  };

  return [pokemonList, addMyPokemon];
};
