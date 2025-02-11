import { useSelector, useDispatch } from "react-redux";
import { swalAlert, swalDeleteAlert } from "../style/SweetAlert";
import { notify } from "../style/Toastify";
import { setMyPokemon } from "../redux/myPokeSlice";
// ---------------------------------------------------------
/**
 * @returns {{ myPokemon, pokemonList, addMyPokemon, removeMyPokemon }} 나의 포켓몬 리스트, 전체 리스트, 추가 삭제 함수가 담긴 객체
 */
export const useMyPokemon = () => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((a) => a.myPokeSlice);
  const pokemonList = useSelector((a) => a.pokeListSlice);

  /**
   * 나의 포켓몬 리스트에 선택한 포켓몬을 추가한다.
   * 6개 이상 선택하거나 이미 추가된 포켓몬을 선택하면 알림을 띄우고 실행을 종료한다.
   * 선택한 포켓몬을 기존 배열을 복사한 새로운 배열의 null 위치에 추가한 뒤 myPokemon 상태값을 해당 배열로 변경한다.
   * @param {number} pokeId 선택한 포켓몬의 아이디 값이 들어간다.
   */
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

    const selectedPokemon = pokemonList.find((a) => a.id === pokeId); // 선택한 포켓몬 가져오기

    const newMyPokemon = [...myPokemon]; // 새로운 myPokemon 배열을 만들어서 기존 배열 복사
    newMyPokemon[firstNullIndex] = selectedPokemon; // 새로 만든 배열의 첫번째 비어있는 인덱스를 선택한 포켓몬으로 교체

    dispatch(setMyPokemon(newMyPokemon));
    localStorage.setItem("pokemon", JSON.stringify(newMyPokemon));
    notify(`${selectedPokemon.korean_name} 추가 완료!`);
  };
  // ------------------------------------------------------------------------------------------------------------
  /**
   * 나의 포켓몬 리스트에서 선택한 포켓몬을 삭제한다.
   * 선택한 포켓몬을 기존 배열을 복사한 새로운 배열에서 삭제한 뒤 null 값으로 채운다.
   * 만들어진 새로운 배열은 null 값이 뒤로 가도록 정렬한 뒤 myPokemon 상태값을 해당 배열로 변경한다.
   * @param {number} id 선택한 포켓몬의 아이디 값이 들어간다.
   */
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
