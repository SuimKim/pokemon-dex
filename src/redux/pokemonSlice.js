import { createSlice } from "@reduxjs/toolkit";

const SET_DATA = Array.from({ length: 6 }, () => "");
const initialState = {
  myPokemon: SET_DATA,
};

const pokemonSlice = createSlice({
  name: "myPokemon",
  initialState,
  reducers: {
    setMyPokemon: (state, action) => {
      console.log("action", action);
      state.myPokemon = action.payload;
    },
  },
});

export const { setMyPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
