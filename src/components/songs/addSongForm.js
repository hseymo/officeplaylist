import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { songAdded } from "./songsSlice";

export const AddSongForm = () => {
  // only this form needs to keep track of these pieces of state, thus it is not appropriate to add to redux and redux store is only for data that is considered global
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  const dispatch = useDispatch();

  const onNameChange = (e) => setSongName(e.target.value);
  const onArtistChange = (e) => setArtist(e.target.value);
  const onGenreChange = (e) => setGenre(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (songName.trim()) {
      dispatch(
        songAdded({
          id: nanoid(),
          song_name: songName,
          artist,
          genre,
        })
      );
    }
    setSongName("");
    setArtist("");
    setGenre("");
  };

  return (
    <div className="addForm">
      <h2 className="center">Add a Song</h2>
      <form onSubmit={onFormSubmit}>
        <div className="formGroup">
          <label htmlFor="songName">Song Name:</label>
          <input
            type="text"
            id="songName"
            name="songName"
            placeholder="What Country Is"
            value={songName}
            onChange={onNameChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            placeholder="Luke Bryan"
            value={artist}
            onChange={onArtistChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Country"
            value={genre}
            onChange={onGenreChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
