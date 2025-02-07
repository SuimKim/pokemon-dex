import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../mockData";

const pokeListSlice = createSlice({
  name: "pokemonList",
  initialState: MOCK_DATA,
  reducers: {
    setPokemonList: (state, action) => (state = action.payload),
  },
});

export const { setPokemonList } = pokeListSlice.actions;
export default pokeListSlice.reducer;
