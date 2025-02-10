import { useSelector, useDispatch } from "react-redux";
import { swalAlert, swalDeleteAlert } from "../style/SweetAlert";
import { notify } from "../style/Toastify";
import { setMyPokemon } from "../redux/myPokeSlice";

export const useMyPokemon = () => {
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
    notify(`${selectedPokemon.korean_name} 추가 완료!`);
  };

  const removeMyPokemon = (id) => {
    const selectPokemon = pokemonList.find((pokemon) => pokemon.id === id); // 삭제 알람 띄우기용

    swalDeleteAlert().then((result) => {
      if (result.isConfirmed) {
        notify(`${selectPokemon.korean_name} 삭제 완료!`);

        const deletedPokemon = myPokemon.map((a) => {
          return a !== null && a.id === id ? null : a;
        }); // 새로운 배열에 선택한 포켓몬을 삭제한 자리를 다시 null로 채움. 원래 null이었던 부분도 마찬가지로 null로 채움.

        // 빈 카드 뒤로 보내기 위한 정렬 과정
        const firstNullIndex = deletedPokemon.indexOf(null); // 빈 카드 찾기
        const item = deletedPokemon.splice(firstNullIndex, 1); // 빈 카드 삭제
        deletedPokemon.splice(6, 0, item[0]); // 삭제한 빈 카드 맨 뒤에 붙이기

        dispatch(setMyPokemon(deletedPokemon));
        localStorage.setItem("pokemon", JSON.stringify(deletedPokemon));
      }
    });
  };

  return { myPokemon, pokemonList, addMyPokemon, removeMyPokemon };
};
