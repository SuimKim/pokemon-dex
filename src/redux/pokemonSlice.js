import { createSlice } from "@reduxjs/toolkit";

const SET_DATA = Array.from({ length: 6 }, () => null);

try {
  const localData = JSON.parse(localStorage.getItem("pokemon"));
  !localData && localStorage.setItem("pokemon", JSON.stringify(SET_DATA));
} catch (error) {
  console.log("error", error);
}
const initialState = {
  myPokemon: JSON.parse(localStorage.getItem("pokemon")),
};
const pokemonSlice = createSlice({
  name: "myPokemon",
  initialState,
  reducers: {
    setMyPokemon: (state, action) => {
      state.myPokemon = action.payload;
    },
  },
});

export const { setMyPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
