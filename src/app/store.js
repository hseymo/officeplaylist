import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../components/songs/songsSlice";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});
