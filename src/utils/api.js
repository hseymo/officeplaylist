// import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "https://officeplaylistserver.herokuapp.com";

module.exports = {
  getAllSongs: async () => {
    const response = await fetch(`${BASE_URL}/api/songs`);
    return response.json();
  },

  createNewSong: async (songObject) => {
    const response = await fetch(`${BASE_URL}/api/songs`, {
      method: "POST",
      body: JSON.stringify(songObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },
};

// export const getAllSongs = createAsyncThunk(`songs/fetchSongs`, async () => {
//   const response = await fetch(`${BASE_URL}/api/songs`);
//   return response.json();
// });

// export default getAllSongs;
