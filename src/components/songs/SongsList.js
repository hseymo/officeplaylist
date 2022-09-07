import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import {getAllSongs} from './songsSlice';
// import api from "../../utils/api.js";

export const SongsList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  const songStatus = useSelector((state) => state.songs.status);

  useEffect(() => {
    if (songStatus === "idle") {
      dispatch(getAllSongs());
    }
  }, [songStatus, dispatch]);


  
//   const renderSongs = songs.map((song) => (
//     <article className="songCard" key={song.id}>
//       <h3>{song.song_name}</h3>
//       <h4>{song.artist}</h4>
//       <h4>{song.genre}</h4>
//     </article>
//   ));

  return (
    <div className="SongsList">
      <h2>Songs</h2>
      {/* {renderSongs} */}
    </div>
  );
};
