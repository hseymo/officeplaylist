import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { getAllSongs } from "./songsSlice";
// import api from "../../utils/api.js";

export const SongsList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

//   const songStatus = useSelector((state) => state.songs.status);

//   useEffect(() => {
//     if (songStatus === "idle") {
//       dispatch(getAllSongs());
//     }
//   }, [songStatus, dispatch]);

  const renderSongs = songs.map((song) => (
    <article className="songCard card" key={song.id}>
      <h3>{song.song_name}</h3>
      <h4>{song.artist}</h4>
      <h4>{song.genre}</h4>
      {/* <section className="btnSection">
        <button className="updateBtn" data-id="1">
          Update
        </button>
        <button className="deleteBtn" data-id="2">
          Delete
        </button>
      </section> */}
    </article>
  ));

  return (
    <div className="SongsList">
      <h2>Songs</h2>
      <div className="Song container listcontainer">
        {renderSongs}
        </div>
    </div>
  );
};
