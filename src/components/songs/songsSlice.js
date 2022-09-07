import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    song_name: "Make It Sweet",
    artist: "Old Dominion",
    genre: "Country",
  },
  {
    id: 2,
    song_name: "This",
    artist: "Darius Rucker",
    genre: "Country",
  },
];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    songAdded (state, action) {
      state.push(action.payload)
    }
  },
});

export const {songAdded } = songsSlice.actions;

export default songsSlice.reducer;
