import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: 1,
//     song_name: "Make It Sweet",
//     artist: "Old Dominion",
//     genre: "Country",
//   },
//   {
//     id: 2,
//     song_name: "This",
//     artist: "Darius Rucker",
//     genre: "Country",
//   },
// ];

const initialState = {
  songs: [],
  status: "idle",
  error: null,
};

export const getAllSongs = createAsyncThunk(`songs/getAllSongs`, async () => {
  const response = await fetch(
    `https://officeplaylistserver.herokuapp.com/api/songs`
  );
  // return response.json();
  // .then (res => res.json()).then((data) => console.log(data))
  const jsonresponse = await response.json();
  const data = await jsonresponse;
  console.log(data);
  return data;
});

// HOW TO GET SONGS FROM API INTO STORE???????????

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    songAdded(state, action) {
      state.push(action.payload);
    },
    getAllSongs(state,action) {
      state.push([...action.payload])
    }
  },
});

export const { songAdded } = songsSlice.actions;

export default songsSlice.reducer;
