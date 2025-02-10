import { configureStore } from "@reduxjs/toolkit";
import myPokeSlice from "./myPokeSlice";
import pokeListSlice from "./pokeListSlice";
import searchValueSlice from "./searchValueSlice";

export const store = configureStore({
  reducer: { myPokeSlice, pokeListSlice, searchValueSlice },
});
