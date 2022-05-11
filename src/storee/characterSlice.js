import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "characters",
  initialState: {
    id: "",
    charc: [],
    isCharacterFounded: false,
  },

  reducers: {
    fetchCharcRequest(state, action) {
      return { ...state, id: action.payload };
    },
    fetchCharcSuccess(state, action) {
      return { ...state, charc: action.payload };
    },
    resetCharc(state) {
      return { ...state, charc: "" };
    },
  },
});

export const { fetchCharcRequest, fetchCharcSuccess, resetCharc } =
  slice.actions;

export const selectCharc = (state) => state.characters;

export default slice.reducer;
