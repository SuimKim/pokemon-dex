import { createSlice } from "@reduxjs/toolkit";

const SET_DATA = Array.from({ length: 6 }, () => null);

try {
  const localData = JSON.parse(localStorage.getItem("pokemon"));
  !localData && localStorage.setItem("pokemon", JSON.stringify(SET_DATA));
} catch (error) {
  console.log("error", error);
}

const myPokeSlice = createSlice({
  name: "myPokemon",
  initialState: JSON.parse(localStorage.getItem("pokemon")),
  reducers: {
    setMyPokemon: (state, action) => (state = action.payload),
  },
});

export const { setMyPokemon } = myPokeSlice.actions;
export default myPokeSlice.reducer;
