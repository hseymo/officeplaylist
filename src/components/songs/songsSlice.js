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
  try {
    console.log("sending request....");
    const response = await fetch(
      `https://officeplaylistserver.herokuapp.com/api/songs`
    );
    console.log(response)
    const jsonresponse = await response.json();
    console.log(jsonresponse);
    return jsonresponse;
  } catch (err) {
    console.log(err);
  }
});

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    songAdded(state, action) {
      state.songs.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllSongs.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getAllSongs.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched songs to the array
        state.songs = state.songs.concat(action.payload)
      })
      .addCase(getAllSongs.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const { songAdded } = songsSlice.actions;

export default songsSlice.reducer;

export const selectAllSongs = state => state.songs.songs;


