import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { createNewSong } from "./songsSlice";

export const AddSongForm = () => {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [createRequestStatus, setCreateRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const onNameChange = (e) => setSongName(e.target.value);
  const onArtistChange = (e) => setArtist(e.target.value);
  const onGenreChange = (e) => setGenre(e.target.value);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (songName.trim()) {
      try {
        setCreateRequestStatus("pending");
        const res = await dispatch(
          createNewSong({
            id: nanoid(),
            song_name: songName,
            artist,
            genre,
          })
        );
        setSongName("");
        setArtist("");
        setGenre("");
        // immer must return one or the other
      } catch (err) {
        console.log(err);
      }
       finally {
        setCreateRequestStatus("idle");
      }
    } else {
      console.log("please enter song name");
    }
  };

  return (
    <div className="addForm">
      <h2 className="addHeader">Add a Song</h2>
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
