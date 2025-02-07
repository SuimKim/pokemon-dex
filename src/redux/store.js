import { configureStore } from "@reduxjs/toolkit";
import myPokeSlice from "./myPokeSlice";
import pokeListSlice from "./pokeListSlice";

export const store = configureStore({
  reducer: { myPokeSlice, pokeListSlice },
});
