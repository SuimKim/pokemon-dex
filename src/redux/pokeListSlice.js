import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../mockData";

const pokeListSlice = createSlice({
  name: "pokemonList",
  initialState: MOCK_DATA,
  reducers: {
    setPokemonList: (state, action) => {
      return action.payload;
    },
    resetList: (state) => {
      return MOCK_DATA;
    },
  },
});

export const { setPokemonList, resetList } = pokeListSlice.actions;
export default pokeListSlice.reducer;
